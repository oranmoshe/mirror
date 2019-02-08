import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  day: String;
  time: String;
  constructor() { }

  ngOnInit() {
    const d = new Date();
    const weekday: any = new Array();
    weekday[0] =  'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    this.day = weekday[d.getDay()];
    this.time = d.getHours() + ':' + d.getMinutes();



  }

}
