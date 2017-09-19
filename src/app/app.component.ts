import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {

      if(window.location.pathname === '/vision'){

        document.getElementById('topbar').style.backgroundColor = "black";

      }
    }


  title = 'app works!';

  constructor(){}



}


