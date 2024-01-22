import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-interactor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div>
        <h2>Interactor Receiver</h2>
        <h3>Hello {{parentData}}</h3>
        <h3>Hello {{oldManData}}</h3>
      </div>
      <div>
        <h2>Interactor Sender</h2>
        <button (click)="fireEvent()">Send Event</button>
      </div>
      <div>
        <h2>{{ intro | titlecase }}</h2>
        <p>{{ oldManData | uppercase }}</p>
        <p>{{ parentData | lowercase }}</p>
        <p>The hero's birthday is {{ birthday | date }}</p>
        <br>
        <p>{{5.678 | number:'1.2-3'}}</p>
        <p>{{5.678 | number:'3.4-5'}}</p>
        <p>{{5.678 | number:'3.1-2'}}</p>
    </div>
    </div>
  `,
  styleUrl: './interactor.component.css'
})
export class InteractorComponent implements OnInit {

  @Input() parentData!: string;
  // ANOTHER WAY TO DO THIS:
  @Input('grandpaData') oldManData!: string;

  @Output() childEvent = new EventEmitter();

  intro = 'Pipes permite transformar os dados antes de mostrá-los'

  birthday = new Date(1988, 3, 15);

  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit("Event sended");
  }
}
