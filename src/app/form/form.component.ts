import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {

  constructor(private _enrollmentService: EnrollmentService) {}

  topics = ['Angular', 'React', 'HTML'];
  topicHasError = true
  submitted = false;

  userModel = new User(
    '',
    '',
    3199315353,
    'default',
    'morning',
    true
  );

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else this.topicHasError = false;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    this._enrollmentService.enrol(this.userModel)
      .subscribe({
        next: data => console.log("Subscribe::: ", data),
        error: err => console.log("Error::: ", err)
      })
  }
}
