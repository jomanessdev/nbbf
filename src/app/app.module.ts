import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SwiperModule } from 'angular2-useful-swiper';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { WhatToExpectComponent } from './views/what-to-expect/what-to-expect.component';
import { GetInvolvedComponent } from './views/get-involved/get-involved.component';
import { MediaComponent } from './views/media/media.component';
import { BeliefsComponent } from './views/beliefs/beliefs.component';
import { VisionComponent } from './views/mission-vision/mission-vision.component';
import { OurStoryComponent } from './views/our-story/our-story.component';
import { TestComponent } from './components/test/test.component';

import { VideoBackground } from '@squarespace/video-background';
import { MediaDialogComponent } from './components/media-dialog/media-dialog.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { EventsComponent } from './views/events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    WhatToExpectComponent,
    GetInvolvedComponent,
    MediaComponent,
    MediaDialogComponent,
    AboutUsComponent,
    ComingSoonComponent,
    EventsComponent,
    BeliefsComponent,
    VisionComponent,
    OurStoryComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdDialogModule,
    BrowserAnimationsModule,
    SwiperModule
    ],
  providers: [],
  entryComponents: [MediaDialogComponent,TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
