import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  http: any;
  postURL: 'http://localhost:5000/api/Registration';

  register(user: Users) {
    return this.http.post(`${this.postURL}/users/register`, user);
}
  constructor() { }

  ngOnInit() {
  }

}
