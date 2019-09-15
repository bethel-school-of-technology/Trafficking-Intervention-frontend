import { Component, OnInit } from '@angular/core';
import { TestimoniesService } from '../../services/testimonies.service';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Testimonies } from '../../models/testimonies';
import { TestimoniesFormComponent } from 'src/app/testimonies-form/testimonies-form.component';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {
  testimony: Testimonies;
  testimonyForm: FormGroup;
  URL: 'http://localhost:5000/api/Testimony';
  displayData: boolean;
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(
    private httpClient: HttpClient,
    private testimonyService: TestimoniesService,
    private formBuilder: FormBuilder,
  ) {
    this.testimonyForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      testimony: '',
      date: '',
      site: '',
    });
  }

  handlePost(testimonyService: TestimoniesService): Observable<Testimonies> {
    return this.httpClient.post<Testimonies>(this.URL, this.testimony, this.httpOptions).pipe(
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

  onSubmit(testimonyService) {
    this.addTestimony(testimonyService).subscribe(data => console.log(data))
    console.log("hello");
    console.warn('Your testimony request has been submitted', testimonyService);
    this.testimonyForm.reset();
  }

  getTestimony() {
    this.testimonyService.getTestimony(this.testimony.firstName, this.testimony.lastName).subscribe(data => {
      this.testimony = data;
      this.displayData = true;
    });
  }

  addTestimony(testimony: Testimonies): Observable<Testimonies> {
    return this.httpClient.post<Testimonies>(this.URL, testimony, this.httpOptions)
  }

  updatePrayer(testimonyForm: TestimoniesFormComponent) {
    return this.testimonyService.updateTestimony(this.testimony).subscribe(data => {
      this.testimony = data;
      this.testimony.lastName = 'Updated Prayer';
      this.testimonyService.updateTestimony(this.testimony).subscribe(data1 => {
        this.getTestimony();
      });
    });
  }

  deletePrayer(testimony: Testimonies) {
    this.testimonyService.deleteTestimony(testimony).subscribe(data => {
      this.getTestimony();
    });
  }


  ngOnInit() {
    this.getTestimony();
  }

}
