import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../employee';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: IEmployee[] = [];
  errorMsg = '';

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe({
        next: data => this.employees = data,
        error: err => this.errorMsg = err,
      });
  }

}
