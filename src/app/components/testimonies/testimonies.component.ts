import { Component, OnInit } from '@angular/core';
import { TestimoniesService } from '../../services/testimonies.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {

  items;
  testimonyForm;
  postURL: 'http://localhost:5000/api/Testimony';

  constructor(
    private testimonyService: TestimoniesService,
    private formBuilder: FormBuilder,
  ) { 
    this.items = this.testimonyService.getItems();
      this.testimonyForm = this.formBuilder.group({
        name: '',
        site: '',
        date:'',
        testimony: ''
      });
    }

  onSubmit(prayerData) {
    // Process checkout data here
    // this.items.post(this.postURL);
    console.warn('Your testimony has been submitted', prayerData);

    this.items = this.testimonyService.clearItems();
    this.testimonyForm.reset();
  }
  getPrayer() {


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

  ngOnInit() {
  }

}
