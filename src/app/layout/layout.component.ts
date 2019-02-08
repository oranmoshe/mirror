import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  index: any = -1;
  titles: any = [];
  delay: any = [];
  times: any = [];
  constructor() {
    this.titles = [
      'You wake up early and play with your daughter - Good job' ,
      'It looks like you had a relaxed drive to work - let’s keep it that way ',
      'You used the elevator instead of stairs - let’s try to keep our exercise routine',
      'You spent a lot of time in work and got angry at the computer - try to avoid this kind of behaviour ',
      'While scootering home you got a ticket - please obey the law and local rules' ,
      'You came back from work pretty late - avoid working long hours, we are working on spending more time with your family' ,
      'You played with your daughter before putting here to bed - this is grate!' ,
      'You remember to feed your pet without me telling you to do so, good progress…' ,
      'Playing Xbox replace other things you love to do like listening to music - just keep it in mind…' ,
      'Oh oh - You didn\'t exercised enough to eat Pizza - this is bad for your health, your heart rate is higher this week, ' +
      'please eat responsibly and cut the Pizza.',
      'Smoking? Again? You promised…. :(' ,
      ' 2:00AM is too late - you wake up tired plus it is really bad for your health.' ,
      '*** I noticed that your didn’t spend enough time with your wife yesterday - you need to work on your marriage.' +
      ' I suggest you to take her out for a healthy meal.' ,
      'I can book you for a good vegetarian restaurant for tomorrow at 08:00PM, please order some red wine as well - one glass only,' +
      ' your wife and babysitter are available from 07:30PM, the restaurant is not expensive so you’ll be fine with spending up to 300$ -' +
      ' it will not risk your early vacation savings - do you want me to schedule this event?'
    ];
    this.delay = [3, 3, 3, 6, 3, 3, 3, 3, 3, 3, 3, 3, 10];
    this.times = ['6:40', '8:00', '8:10', '11:45', '18:00', '18:10', '19:22', '20:20', '21:11', '22:45', '23:33', '00:00', ''];

  }

  ngOnInit() {
    this.nextText();
    this.callFuntionAtIntervals();
  }
  callFuntionAtIntervals() {
    setTimeout(() => {
      this.nextText();
      this.callFuntionAtIntervals();
    }, 1000 * this.delay[this.index]);
  }
  nextText() {
    this.index++;
  }
}
