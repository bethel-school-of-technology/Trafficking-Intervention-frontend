import { Component, OnInit, ɵConsole } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders, } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post} from 'selenium-webdriver/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import {Prayer } from '../../models/prayer';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})


export class PrayerComponent {
  items;
  prayerForm: FormGroup;
  postURL: 'http://localhost:5000/api/PrayerRequest/';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  //constructor(private httpClient:HttpClient){}


  constructor(
    private prayerService: PrayerService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
    ) {
      this.items = this.prayerService.getItems();
      this.prayerForm = this.formBuilder.group({
        name: '',
        site: '',
        date:'',
        prayer: ''
      });
     }

     handlePost(prayerData: Prayer): Observable<Prayer>{
      return this.httpClient.post<Prayer>('http://localhost:5000/api/PrayerRequest/', prayerData, this.httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
     }
     private handleError(error: any) {
      console.log(error);
      return throwError(error);
    }

     onSubmit(prayerData) {
      this.handlePost(prayerData).subscribe(data => console.log(data))
      console.log("hello");
      console.warn('Your prayer request has been submitted', prayerData);
  
      //this.items = this.prayerService.clearItems();
      //this.prayerForm.reset();

      }
      // public int AppUserID {get; set; }
      // public string FirstName {get; set; }
      // public string LastName {get; set; }
      // public string PrayerRequest {get; set; }    
        
      // public string Date {get; set; }
      
      // public string Sites {get; set; }
        postRequest(){
          this.httpClient.post('http://localhost:5000/api/PrayerRequest/', JSON.stringify(this.prayerForm)
            // {
            //   method: 'POST',
            //   body: JSON.stringify(this.prayerForm),
            //   mode: 'cors', // no-cors, cors, *same-origin
            //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //   credentials: 'omit',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   }
            //}
          )
              
          .subscribe(
            // {
            //   method: 'POST',
            //   body: JSON.stringify(this.prayerForm),
            //   mode: 'cors', // no-cors, cors, *same-origin
            //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //   credentials: 'omit',
            //   headers: {
            //     'Content-Type': 'application/json'
            // }
          )
        }
           
    //       //.then(res => res.json())
    //       // .then(response => console.log('Success:', JSON.stringify(response)))
    //       // .catch(error => console.error('Error:', error));
    // }
  
 ngOnInit(){}

}


