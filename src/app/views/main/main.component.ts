import { Component, OnInit } from '@angular/core';
import { VideoBackground as VideoBackgroundRenderer } from '@squarespace/video-background-rendering';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const config = {
      container: document.documentElement.querySelector('.sqs-video-background'),
      url: '../../assets/new-web-vid.mp4',
      /*useCustomFallbackImage: true*/
    };
    const myVideoBackground = new VideoBackgroundRenderer(config);
  }

  }
