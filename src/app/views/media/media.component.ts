import { Component, OnInit, ElementRef } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { MdDialog } from '@angular/material';

import { MediaDialogComponent } from '../../components/media-dialog/media-dialog.component';
import { TestComponent } from '../../components/test/test.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  mediaFilter: string = '*';
  media: any[] = [
    {source:'https://www.youtube.com/embed/wabjoe8MEII?autoplay=1', cover:'images/gallery/worship.jpg', id:'worship',title:'Worship', type:'video'},
    {source:'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmynbbf%2Fvideos%2F1418617228229814%2F&show_text=0&width=560', cover:'images/gallery/wellness.jpg', id:'welness_series',title:'Wellness Promo', type:'video'},
    {source:'', cover:'images/gallery/evan1.jpg', id:'evan_state', title: 'Evangelism at NC State', type: 'slideshow', slides:[{source:'images/gallery/evan1.jpg'}, {source:'images/gallery/evan2.jpg'}, {source:'images/gallery/evan3.jpg'}, {source:'images/gallery/evan4.jpg'}, {source:'images/gallery/evan5.jpg'}, {source:'images/gallery/evan6.jpg'}]},
    // {source:'',cover:'images/gallery/brown1.jpg', id:'brown-bag',title:'Brown Bag Blessings', type: 'slideshow', slides:[{source:'images/gallery/brown1.jpg'},{source:'images/gallery/brown2.jpg'}]},
    {source:'', cover:'images/gallery/bapt1.jpg', id:'bapt',title:'Baptism', type:'slideshow', slides:[{source:'images/gallery/bapt1.jpg'},{source:'images/gallery/bapt2.jpg'},{source:'images/gallery/bapt3.jpg'},{source:'images/gallery/bapt4.jpg'},{source:'images/gallery/bapt5.jpg'},]},
    {source:'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmynbbf%2Fvideos%2F1430136747077862%2F&show_text=0&width=560', cover:'images/gallery/sermon.jpg', id:'sermon_081317', title:'August 13, 2017', type:'sermon'}
  ];
  filteredMedia: any[] = [];
  selectedMedia: any = {};
  sanitizedSource: any = null;

  constructor(private sanitizer: DomSanitizer, 
              private elementRef: ElementRef,
              private modalService: MdDialog) 
  { this.filteredMedia = this.media }

  ngOnInit() {
  }

  filterMedia(filterType: string){
    this.mediaFilter = filterType;
    if(filterType=='*'){
      this.filteredMedia = this.media;
    }else{
      this.filteredMedia = this.media.filter(item => item.type==filterType);
    }
  }

  setSelectedMedia(mediaItem: any){
    this.sanitizedSource = this.sanitizer.bypassSecurityTrustResourceUrl(mediaItem.source);
    this.selectedMedia = mediaItem;
  }

  openDialog(media: any){
    this.sanitizedSource = this.sanitizer.bypassSecurityTrustResourceUrl(media.source);
    this.modalService.open(MediaDialogComponent,{data:{media: media, source: this.sanitizedSource}}).afterClosed().subscribe(() =>{
    })
  }
}
