import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "../assets/data/employees1.json"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    const errorMessage = error.status === 0 ?
      'Unable to connect to the server.' :
      'Something bad happened; please try again later.';

    return throwError(() => new Error(errorMessage));
  }
}
