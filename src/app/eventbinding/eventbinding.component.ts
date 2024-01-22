import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  standalone: true,
  imports: [],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  coldBtn = 'Fuck off'

  cookieBtn = 'Have a cookie'

  coldMessage = ''

  cookieMessage = ''

  coffeebtn = 'Coffee'

  coffeeMessage = ''


  onClick() {
    this.coldMessage = 'Congrads! You dont give a fuck!'
  }

  clickAgain(event: any) {
    console.log(event);
    console.log(event.type);
    this.cookieMessage = "Im joking, here's your cookie"
  }

  logMessage(value: any) {
    console.log(value);
  }

}
