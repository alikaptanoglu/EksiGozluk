import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtubeComponent } from './utube.component';
import { UtubeVideoComponent } from './utube-video/utube-video.component';
import { UtubeService } from './utube.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UtubeComponent, UtubeVideoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [UtubeService],

})
export class UtubeModule { }
