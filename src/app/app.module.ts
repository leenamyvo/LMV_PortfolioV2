import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PhotoComponent } from './photo/photo.component';
import { VideoComponent } from './video/video.component';
import { DesignComponent } from './design/design.component';
import { AboutComponent } from './about/about.component';
import { ArtComponent } from './art/art.component';
import { DiyComponent } from './diy/diy.component';
import { FoodComponent } from './food/food.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    PhotoComponent,
    VideoComponent,
    DesignComponent,
    AboutComponent,
    ArtComponent,
    DiyComponent,
    FoodComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
