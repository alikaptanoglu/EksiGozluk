import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber, Subject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TumSaticilarService {
  saticilar: any[] = [];

  constructor() {
    this.saticilar = [{ "fiyat": "10123", "saticiName": "Akif Mall", "saatSiniri": "18 saat 32 dakika", "gun": "bugün" },
    { "fiyat": "4123", "saticiName": "Berfin Shop", "saatSiniri": "20 saat 12 dakika", "gun": "yarın" },
    { "fiyat": "43423", "saticiName": "Umut Bakkal", "saatSiniri": "24 saat 43 dakika", "gun": "ertesi gün" }];
   }

  getSaticilar(): Observable<any[]>  {
    return of(this.saticilar);
  }
}
