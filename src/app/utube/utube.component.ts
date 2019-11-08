import { Component, OnInit } from '@angular/core';
import { UtubeService } from './utube.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginatorModule, PageEvent } from '@angular/material';

@Component({
  selector: 'app-utube',
  templateUrl: './utube.component.html',
  styleUrls: ['./utube.component.scss']
})
export class UtubeComponent implements OnInit {
  searchForm = this.fb.group({
    searchInput: ['', Validators.required]
  });

  result: any[];
  pageEvent: PageEvent;


  constructor(private fb: FormBuilder, private utubeService: UtubeService) { }

  ngOnInit() {

  }

  search(){
    this.utubeService.getSearchResult(this.searchForm.controls["searchInput"].value, 10).subscribe(resp => {
      this.result = resp["items"];
      console.log(this.result);
    });
  }

  public getServerData(event?:PageEvent){
    this.utubeService.getSearchResult(this.searchForm.controls["searchInput"].value, event.pageSize).subscribe(resp => {
      this.result = resp["items"];
      console.log(this.result);
      console.log(event);
    });
    return event;
  }

}
