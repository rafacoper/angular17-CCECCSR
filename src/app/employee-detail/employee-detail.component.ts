import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { catchError } from 'rxjs';
import { IEmployee } from '../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit {

  employees: IEmployee[] = [];
  errorMsg = '';

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe({
        next: data => this.employees = data,
        error: err => this.errorMsg = err,
      });
  }

}
