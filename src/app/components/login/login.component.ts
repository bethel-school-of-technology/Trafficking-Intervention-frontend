import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Users } from '../../models/users';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  items;
  loginForm: FormGroup;
  postURL: 'http://localhost:5000/api/Login';


  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    ) {
      this.items = this.loginService.getItems();
      this.loginForm = this.formBuilder.group({
        username: '',
        password: ''
      });
     }

     onSubmit(loginData) {
      // Process checkout data here
      // this.items.post(this.postURL);
      console.warn('Your prayer request has been submitted', loginData);
  
      this.items = this.loginService.clearItems();
      this.loginForm.reset();
    }
    getLogin() {


  fetch(this.postURL,{
    method: 'POST',
    body: JSON.stringify(this.items),
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  .then(res => res.json())

.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));

    }
  
  ngOnInit()    {  }

}

