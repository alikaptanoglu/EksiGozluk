import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TumSaticilarComponent } from './tum-saticilar/tum-saticilar.component';
import { UtubeComponent } from './utube/utube.component';
import { UtubeVideoComponent } from './utube/utube-video/utube-video.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'tumsatici', component: TumSaticilarComponent, data: { title: 'Tüm Satıcılar' } },
  { path: 'utube', component: UtubeComponent, data: { title: 'UTube' } },
  { path: 'utube-video/:id', component: UtubeVideoComponent, data: { title: 'UTube Video' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
