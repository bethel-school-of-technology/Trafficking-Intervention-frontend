import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:5000/api/values';
  postUrl: string ='http://localhost:4200/login';

  constructor(private http: HttpClient) { }

  //   public createUser(user: User){
//     return this.http.post(`${this.postUrl}`, User);
// }
}
