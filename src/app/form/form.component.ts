import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  topics = ['Angular', 'React', 'HTML'];

  userModel = new User(
    '',
    '',
    3199315359,
    '',
    'morning',
    true
  );
}
