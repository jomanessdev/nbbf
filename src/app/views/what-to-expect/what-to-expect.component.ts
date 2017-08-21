import { Component, OnInit } from '@angular/core';
import { VideoBackground as VideoBackgroundRenderer } from '@squarespace/video-background-rendering';

@Component({
  selector: 'app-what-to-expect',
  templateUrl: './what-to-expect.component.html',
  styleUrls: ['./what-to-expect.component.css']
})
export class WhatToExpectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const config = {
      container: document.documentElement.querySelector('.sqs-video-background'),
      url: 'https://youtu.be/-rsIA02BvBc'/*,
      useCustomFallbackImage: true*/
    };
    const myVideoBackground = new VideoBackgroundRenderer(config);
  }

}
