import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = '';

  constructor(private _http: HttpClient) { }

  enrol(user: User) {
    return this._http.post<any>(this._url, user)
  }
}
