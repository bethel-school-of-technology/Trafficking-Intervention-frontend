import { Component, OnInit, ɵConsole } from '@angular/core';
import { TestimoniesService } from '../../services/testimonies.service';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Testimonies } from '../../models/testimonies';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})

export class TestimoniesComponent implements OnInit{
  testimonies: Testimonies;
  testimoniesForm: FormGroup;
  URL = 'http://localhost:5000/api/Testimony/';
  displayData: boolean;
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(
    private httpClient: HttpClient,
    private testimoniesService: TestimoniesService,
    private formBuilder: FormBuilder,

  ) {
    this.testimoniesForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      testimony: '',
      date: '',
      site: '',
    });
  }

  handlePost(testimoniesService: TestimoniesService): Observable<Testimonies> {
    return this.httpClient.post<Testimonies>(this.URL, this.testimonies.firstName, this.httpOptions).pipe(
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


  onSubmit(testimoniesService) {
    this.addTestimonies(testimoniesService).subscribe(data => console.log(data))
    console.log("hello");
    console.warn('Your prayer request has been submitted', testimoniesService);

    // this.prayer = this.prayerService.clearPrayer();
    this.testimoniesForm.reset();


  }


  getTestimonies() {
    this.testimoniesService.getTestimonies(this.testimonies.firstName, this.testimonies.lastName).subscribe(data => {
      this.testimonies = data;
      this.displayData = true;
    });
  }

  addTestimonies(testimonies: Testimonies): Observable<Testimonies> {
    return this.httpClient.post<Testimonies>(this.URL, testimonies, this.httpOptions)
  }

  updateTestimonies(testimonies: Testimonies){
    return this.testimoniesService.updateTestimonies(this.testimonies).subscribe(data => {
      this.testimonies = data;
      this.testimonies.lastName = 'Updated Prayer';
      this.testimoniesService.updateTestimonies(this.testimonies).subscribe(data1 => {
        this.getTestimonies();
      });
    });
  }

  deleteTestimonies(testimonies: Testimonies) {
    this.testimoniesService.deleteTestimonies(testimonies).subscribe(data => {
      this.getTestimonies();
    });
  }

  

  ngOnInit() {
    this.getTestimonies();
  }

}
