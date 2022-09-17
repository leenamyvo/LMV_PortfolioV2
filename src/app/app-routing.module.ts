import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ArtComponent } from './art/art.component';
import { DesignComponent } from './design/design.component';
import { DiyComponent } from './diy/diy.component';
import { ErrorComponent } from './error/error.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'art', component: ArtComponent },
  { path: 'design', component: DesignComponent },
  { path: 'diy', component: DiyComponent },
  { path: 'food', component: FoodComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'video', component: VideoComponent},
  { path: '', component: HomeComponent }, 
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
