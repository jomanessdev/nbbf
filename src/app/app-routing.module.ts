import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { MainComponent } from './views/main/main.component'; 
import { AboutUsComponent } from './views/about-us/about-us.component';
import { WhatToExpectComponent } from './views/what-to-expect/what-to-expect.component';
import { GetInvolvedComponent } from './views/get-involved/get-involved.component';
import { MediaComponent } from './views/media/media.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { EventsComponent } from './views/events/events.component';
import { BeliefsComponent } from './views/beliefs/beliefs.component';
import { VisionComponent } from './views/mission-vision/mission-vision.component';
import { OurStoryComponent } from './views/our-story/our-story.component';
 
const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'about-us', component: AboutUsComponent},
  { path: 'what-to-expect', component: WhatToExpectComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'media', component: MediaComponent },
  {path:'coming-soon', component: ComingSoonComponent},
  {path:'events',component: EventsComponent},
  { path: 'beliefs', component: BeliefsComponent },
  {path:'vision', component: VisionComponent},
  {path:'story',component: OurStoryComponent},
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }