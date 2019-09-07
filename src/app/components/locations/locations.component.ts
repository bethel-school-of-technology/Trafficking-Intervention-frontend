import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocationsService } from '../../services/locations.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {

  items;
  postURL: 'http://localhost:5000/api/Locations';
  locationsForm: FormGroup;

  constructor(
    private locationsService: LocationsService,
    private formBuilder: FormBuilder,
    ) {
      this.items = this.locationsService.getItems();
      this.locationsForm = this.formBuilder.group({
        name: '',
        site: '',
        street:'',
        city: '',
        state: '',
        zip: '',
        type: '',
        date: ''
      });
     }

     onSubmit(locationsData) {
      // Process checkout data here
      // this.items.post(this.postURL);
      console.warn('Your username and password has been submitted', locationsData);
  
      this.items = this.locationsService.clearItems();
      this.locationsForm.reset();
    }
    getPrayer() {

  function postData(postURL, data = {}) {
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
  }
  ngOnInit() {
  }

}
