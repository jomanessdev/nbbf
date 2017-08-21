import { Component, OnInit } from '@angular/core';
import { VideoBackground as VideoBackgroundRenderer } from '@squarespace/video-background-rendering';




@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css']
})
export class GetInvolvedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const config = {
      container: document.documentElement.querySelector('.sqs-video-background'),
      url: 'https://youtu.be/qzA8RVE6rzA'/*,
      useCustomFallbackImage: true*/
    };
    const myVideoBackground = new VideoBackgroundRenderer(config);
  }

}
