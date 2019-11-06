import { Component, OnInit } from '@angular/core';
import { TumSaticilarService } from './tum-saticilar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tum-saticilar',
  templateUrl: './tum-saticilar.component.html',
  styleUrls: ['./tum-saticilar.component.scss']
})
export class TumSaticilarComponent implements OnInit {
  saticilar: any[] = [];
  fiyat: number;
  saticiName: string;
  saatSiniri: string;
  gun: string;

  constructor(private tumSaticilarService: TumSaticilarService, private toastr: ToastrService) { }

  ngOnInit() {
    this.tumSaticilarService
    .getSaticilar()
    .subscribe( sat => this.saticilar = sat);
    
    console.log(this.saticilar);
  }

  sepeteEkle(satici: any){
    this.toastr.success('Ürün Satıldı', satici.saticiName);
  }
}
