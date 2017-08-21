import { Component, OnInit, Input, Inject, ElementRef } from '@angular/core';

import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.css']
})
export class MediaDialogComponent implements OnInit {

  media: any;
  source: string;
  config: Object;
  iframeWidth: string = '100%';
  iframeHeight: string ='100%';
  imgWidth: string = '800px';
  imgHeight: string ='450px';

  constructor(@Inject(MD_DIALOG_DATA) public data: any, 
      private elementRef: ElementRef,
      private dialogRef: MdDialogRef<any>) { 
    this.media = data.media;
    this.source = data.source;
  }

  ngOnInit() {
    this.config = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30
    };
  }

  closeDialog(){
    if(this.media.type=='video' || this.media.type=='sermon'){
      let iframe = this.elementRef.nativeElement.querySelector('#iFrameOnPage');
      iframe.src = '';
    }
    this.dialogRef.close();
  }

}
