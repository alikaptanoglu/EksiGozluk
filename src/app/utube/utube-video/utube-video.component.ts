import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-utube-video',
  templateUrl: './utube-video.component.html',
  styleUrls: ['./utube-video.component.scss']
})
export class UtubeVideoComponent implements OnInit {
  // YT: any;
  // player: any;
  // reframed: Boolean = false;
  video: any;
  url:any;
  urlVideo:any;

  constructor(
    private route: ActivatedRoute, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.video = this.route.snapshot.paramMap.get('id');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/'+this.video);

    console.log(this.video);
  }
}
