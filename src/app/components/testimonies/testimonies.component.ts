import { Component, OnInit, ɵConsole } from '@angular/core';
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
      testimonies: '',
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

  updateTestimonies(testimoniesForm: TestimoniesFormComponent){
    return this.testimoniesService.updateTestimonies(this.testimonies).subscribe(data => {
      this.testimonies = data;
      this.testimonies.lastName = 'Updated Prayer';
      this.testimoniesService.updateTestimonies(this.testimonies).subscribe(data1 => {
        this.getTestimonies();
      });
    });
  }

  // updatePrayer(prayer: Prayer) {
  //  return this.prayerService.updatePrayer(this.prayer).subscribe(data => {
  //     this.prayer = data;
  //     this.prayer.lastName = 'Updated Prayer';
  //     this.prayerService.updatePrayer(this.prayer).subscribe(data1 => {
  //       this.getPrayer();
  //     });
  //   });
  // }

  deleteTestimonies(testimonies: Testimonies) {
    this.testimoniesService.deleteTestimonies(testimonies).subscribe(data => {
      this.getTestimonies();
    });
  }


  ngOnInit() {
    this.getTestimonies();
  }

}


// import { Component, OnInit, ɵConsole  } from '@angular/core';
// import { TestimoniesService } from '../../services/testimonies.service';
// import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { post } from 'selenium-webdriver/http';
// import { throwError, Observable } from 'rxjs';
// import { tap, catchError, map } from 'rxjs/operators';
// import { Testimonies } from '../../models/testimonies';
// import { TestimoniesFormComponent } from 'src/app/testimonies-form/testimonies-form.component';

// @Component({
//   selector: 'app-testimonies',
//   templateUrl: './testimonies.component.html',
//   styleUrls: ['./testimonies.component.css']
// })
// export class TestimoniesComponent implements OnInit {
//   testimonies: Testimonies;
//   testimoniesForm: FormGroup;
//   URL: 'http://localhost:5000/api/testimonies';
//   displayData: boolean;
//   headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
//   httpOptions = {
//     headers: this.headers,
//   };

//   constructor(
//     private httpClient: HttpClient,
//     private testimoniesService: TestimoniesService,
//     private formBuilder: FormBuilder,
//   ) {
//     this.testimoniesForm = this.formBuilder.group({
//       firstName: '',
//       lastName: '',
//       testimonies: '',
//       date: '',
//       site: ''
//     });
//   }

//   handlePost(testimoniesService: TestimoniesService): Observable<Testimonies> {
//     return this.httpClient.post<Testimonies>(this.URL, this.testimonies, this.httpOptions).pipe(
//       tap(data => console.log(data)),
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: ${error.error}`);
//     }
//     // return an observable with a user-facing error message
//     return throwError(
//       'Something bad happened; please try again later.');
//   }

//   onSubmit(testimoniesService) {
//     this.addtestimonies(testimoniesService).subscribe(data => console.log(data))
//     console.log("hello");
//     console.warn('Your testimonies request has been submitted', testimoniesService);
//     this.testimoniesForm.reset();
//   }

//   gettestimonies() {
//     this.testimoniesService.gettestimonies(this.testimonies.firstName, this.testimonies.lastName).subscribe(data => {
//       this.testimonies = data;
//       this.displayData = true;
//     });
//   }

//   addtestimonies(testimonies: Testimonies): Observable<Testimonies> {
//     return this.httpClient.post<Testimonies>(this.URL, testimonies, this.httpOptions)
//   }

//   updatePrayer(testimoniesForm: TestimoniesFormComponent) {
//     return this.testimoniesService.updatetestimonies(this.testimonies).subscribe(data => {
//       this.testimonies = data;
//       this.testimonies.lastName = 'Updated Prayer';
//       this.testimoniesService.updatetestimonies(this.testimonies).subscribe(data1 => {
//         this.gettestimonies();
//       });
//     });
//   }

//   deletePrayer(testimonies: Testimonies) {
//     this.testimoniesService.deletetestimonies(testimonies).subscribe(data => {
//       this.gettestimonies();
//     });
//   }


//   ngOnInit() {
//     this.gettestimonies();
//   }

// }
