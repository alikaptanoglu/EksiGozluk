import { Component, OnInit } from '@angular/core';
import { UtubeService } from './utube.service';
import { FormBuilder, Validators } from '@angular/forms';

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


  constructor(private fb: FormBuilder, private utubeService: UtubeService) { }

  ngOnInit() {

  }

  search(){
    this.utubeService.getSearchResult(this.searchForm.controls["searchInput"].value).subscribe(resp => {
      this.result = resp["items"];
      console.log(this.result);
    });
  }

}
