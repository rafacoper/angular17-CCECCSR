import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  registrationForm = new FormGroup({
    email: new FormControl('Rafael'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      complement: new FormControl(''),
      neighborhood: new FormControl(''),
      cep: new FormControl(''),
    })
  });

  loadApiData() {
    this.registrationForm.setValue({
      email: 'Rafael',
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
