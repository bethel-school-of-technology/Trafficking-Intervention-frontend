import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:5000/api/values';

  constructor(private http: HttpClient) { }
}
