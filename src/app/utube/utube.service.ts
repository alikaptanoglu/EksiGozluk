import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtubeService {
  apiURL: string = 'http://www.server.com/api/';
  key: string = "AIzaSyBrpZfh3xkSd_1CvszPevWgMPcdpYNN_XU";

  searchResult = new Subject();

  constructor(private httpClient: HttpClient) { }

  getSearchResult(searchInput: string, size: number): Observable<any[]>  {
    let url = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&order=date&part=id,snippet&type=video,id&maxResults=${size}&q=${searchInput}`;
    return this.httpClient.get<any[]>(url);
  }
}
