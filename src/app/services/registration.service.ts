import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  uri = 'http://localhost:5000/api/values';

  constructor(private http: HttpClient) {
   }

  //  getUsers(): Users[]{
  //    return this.http.get("http://localhost:5000/api/values")
  //  }
  //  addUser(id, firstName, lastName, prayerRequests, date, sites) {
  //   const userInfo = {
  //     id: id,
  //     firstName: firstName,
  //     lastName: lastName,
  //     prayerRequests: prayerRequests,
  //     date: date,
  //     sites: sites
  //   };
  //   return this.http.post(`${this.uri}`, userInfo);
  // }
  // trying to figure out how to post to backend
}
