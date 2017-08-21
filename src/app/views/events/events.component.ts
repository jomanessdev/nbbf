import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any = [];

  constructor() { 
    this.events = [
      {title:'Tuesday Night Bible Study',details:'Join us for a word from the Lord at the location below or via Facebook Live Stream',time:'8:00 PM - 9:00 PM EST', date:'August 22', day:'Tuesday', location:'6457 Six Forks Road', source:'images/gallery/biblestudy.jpg'},
      {title:'Thursday Morning Prayer',details:'Start your day off right with community prayer.',time:'5:00 AM - 5:30 AM EST', date:'August 22', day:'Thursday', location:'919-643-9867', source:'images/gallery/prayer.jpg'},
      {title:'Sunday Morning Service',details:'Join us for praise worship and a word from the Lord.',time:'11:30 AM - 12:45 PM EST', date:'August 22', day:'Sunday', location:'601 East Six Forks Road', source:'images/gallery/service.jpg'},
    ]
  }

  ngOnInit() {
  }

}
