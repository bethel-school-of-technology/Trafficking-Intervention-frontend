import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Users } from '../../models/users';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { post } from 'selenium-webdriver/http';
import { Users } from '../../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  items;
  loginForm: FormGroup;
  postURL: 'http://localhost:5000/api/Login';
  http: any;


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


  update(user: Users) {
    return this.http.put(`${this.postURL}/users/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.postURL}/users/${id}`);
  }
  onSubmit(loginData) {

    console.warn('Your prayer request has been submitted', loginData);

    this.items = this.loginService.clearItems();
    this.loginForm.reset();
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  //   onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.loginForm.invalid) {
  //         return;
  //     }

  //     this.loading = true;
  //     this.authenticationService.login(this.f.username.value, this.f.password.value)
  //         .pipe(first())
  //         .subscribe(
  //             data => {
  //                 this.router.navigate([this.postURL]);
  //             },
  //             error => {
  //                 this.alertService.error(error);
  //                 this.loading = false;
  //             });
  // }

}

