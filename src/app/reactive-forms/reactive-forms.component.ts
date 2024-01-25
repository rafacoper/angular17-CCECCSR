import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../folder/forbiddenNameValidator';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  constructor(private fb: FormBuilder) {}

  get userName() {
    return this.registrationForm.get('userName')
  }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      complement: [''],
      neighborhood: ['', Validators.required],
      cep: ['', Validators.required],
    })
  });

  loadApiData() {
    this.registrationForm.patchValue({
      email: 'rafael@gmail',
      password: '12345678',
      confirmPassword: '12345678',
      address: {
        street: 'Uruguai',
        complement: '1401',
        neighborhood: 'Zion',
        cep: '30310520',
      }
    })
  }
}
