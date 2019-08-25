import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../models/users';
import { HttpClient } from '@angular/common/http'

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // postData = {
  //   firstName: 'string',
  // };
  // url = 'http://localhost:5000/api/values';
  // json;
  // trying to figure out http post

  constructor(private http: HttpClient) { 
    // this.http.post(this.url, this.postData,).toPromise().then ((data:any) =>{
    //   console.log(data);
    //   this.json = JSON.stringify(data.json);
    // }) 
    // trying to figure out http post
  }

  ngOnInit() {
  }

}
