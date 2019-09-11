import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { Prayer } from '../../models/prayer';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



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
    private httpClient: HttpClient,
    private prayerService: PrayerService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.prayerService.getItems();
    this.prayerForm = this.formBuilder.group({
      name: '',
      site: '',
      date: '',
      prayer: ''
    });
  }
<<<<<<< HEAD
  getPrayer(): Observable<Prayer[]> {
    return (this.items);
  }
  // post (prayerForm: PrayerComponent): void {
  //   prayerForm = prayerForm.trim()
  // //   this.httpClient.post(this.postURL,{
  // //     name:'',
  // //     site: '',
  // //     date: '',
  // //     prayer: ''
  // //   })
  // //   .subscribe(
  // //     (data:any[]=>
  // //       if()
  // //   )
  // // }
  // }
  onSubmit(prayerData) {
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
    // this.httpClient.post<Prayer>(this.postURL, this.items).subscribe(hero => {
    //   this.items.push(this.prayerService);
    // });
    
    // console.log('Your prayer request has been submitted', prayerData);
    // this.items = this.prayerService.clearItems();
    // this.prayerForm.reset();
  

  ngOnInit() {
=======

     onSubmit(prayerData) {


      console.log('Your prayer request has been submitted', prayerData);
      this.items = this.prayerService.deleteItems();
      this.prayerForm.reset();
    }


  ngOnInit()    {
>>>>>>> c43922db31d281752c6581fbecdc6cd3c23f813e


  }

}

