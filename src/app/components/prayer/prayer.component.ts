import { Component, OnInit, ɵConsole } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Prayer } from '../../models/prayer';


@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})

export class PrayerComponent implements OnInit{
  prayer: Prayer;
  prayerForm: FormGroup;
  URL = 'http://localhost:5000/api/PrayerRequest';
  displayData: boolean;
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(
    private httpClient: HttpClient,
    private prayerService: PrayerService,
    private formBuilder: FormBuilder,

  ) {
    this.prayerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      prayer: '',
      date: '',
      site: '',
    });
  }

  handlePost(prayerService: PrayerService): Observable<Prayer> {
    return this.httpClient.post<Prayer>(this.URL, this.prayer, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  onSubmit(prayerService) {
    this.addPrayer(prayerService).subscribe(data => console.log(data))
    console.log("hello");
    console.warn('Your prayer request has been submitted', prayerService);

    // this.prayer = this.prayerService.clearPrayer();
    this.prayerForm.reset();


  }


  getPrayer() {
    this.prayerService.getPrayer(this.prayer.firstName, this.prayer.lastName).subscribe(data => {
      this.prayer = data;
      this.displayData = true;
    });
  }

  addPrayer(prayer: Prayer): Observable<Prayer> {
    return this.httpClient.post<Prayer>(this.URL, prayer, this.httpOptions)
  }

  updatePrayer(prayer: Prayer){
    return this.prayerService.updatePrayer(this.prayer).subscribe(data => {
      this.prayer = data;
      this.prayer.lastName = 'Updated Prayer';
      this.prayerService.updatePrayer(this.prayer).subscribe(data1 => {
        this.getPrayer();
      });
    });
  }

  deletePrayer(prayer: Prayer) {
    this.prayerService.deletePrayer(prayer).subscribe(data => {
      this.getPrayer();
    });
  }


  ngOnInit() {
    this.getPrayer();
  }

}
