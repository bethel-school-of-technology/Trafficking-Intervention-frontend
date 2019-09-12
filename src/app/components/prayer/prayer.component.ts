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
 




  constructor(
    private httpClient: HttpClient,
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
   
        postRequest(){
          this.httpClient.post('http://localhost:5000/api/PrayerRequest/', JSON.stringify(this.prayerForm)).subscribe()
        }
           
 
  
 ngOnInit(){}

}


