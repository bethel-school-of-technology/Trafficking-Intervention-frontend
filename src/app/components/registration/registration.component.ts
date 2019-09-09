import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  items;
  http: any;
  postURL: 'http://localhost:5000/api/Registration';
  registrationForm: FormGroup;

  register(user: Users) {
    return this.http.post(`${this.postURL}/users/register`, user);
}
  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder,
    ) {
      this.items = this.registrationService.getItems();
      this.registrationForm = this.formBuilder.group({
        firstName: '',
        lastName: '',
        email: '',
        site: '',
        username:'',
        password: ''
      });
     }

     create(items: RegistrationService) {
      return this.http.put(this.postURL, items);
  }
  onSubmit(registrationData) {

  
    console.log('Your prayer request has been submitted', registrationData);
    this.items = this.registrationService.clearItems();
    this.registrationForm.reset();
  }

  ngOnInit() {
  }

}
