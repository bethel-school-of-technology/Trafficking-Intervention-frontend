import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';



@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})


export class PrayerComponent {
  items;
  prayerForm: FormGroup;
  postURL: 'http://localhost:5000/api/PrayerRequest';


  constructor(
    private prayerService: PrayerService,
    private formBuilder: FormBuilder,
    ) {
      this.items = this.prayerService.getItems();
      this.prayerForm = this.formBuilder.group({
        name: '',
        site: '',
        date:'',
        prayer: ''
      });
     }

     onSubmit(prayerData) {

    
      console.warn('Your prayer request has been submitted', prayerData);
  
      this.items = this.prayerService.clearItems();
      this.prayerForm.reset();
    }
    getPrayer() {

      function postData(postURL, Data = {}) {
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

.then(response => this.http.post(postURL, JSON.stringify(response)))
.catch(error => console.error('Error:', error));

    }
  }
  
  ngOnInit()    {  }

}

