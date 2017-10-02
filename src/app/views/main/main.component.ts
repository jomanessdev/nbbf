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

      this.changeVideoSize();

  }

  changeVideoSize = function (){

      var video = document.getElementsByTagName("video")[0];
      var vidParent = document.getElementById("video-parent");
      video.height = vidParent.offsetHeight;
      video.width = vidParent.offsetWidth;
      


  }

  }
