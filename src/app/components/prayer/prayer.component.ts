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
  http: any;



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
     create(items: PrayerService) {
      return this.http.put(this.postURL, items);
  }

     onSubmit(prayerData) {


      console.log('Your prayer request has been submitted', prayerData);
      this.items = this.prayerService.deleteItems();
      this.prayerForm.reset();
    }


  ngOnInit()    {


  }

}

