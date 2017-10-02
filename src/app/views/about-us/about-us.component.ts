import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  goTo(location: string, added: string): void {
    window.location.pathname = ''; 
    window.location.pathname = location;
    window.location.hash = '';
    window.location.hash = location + '' + added;

  }

  ngOnInit() {
  }

}
