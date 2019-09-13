import { Component, OnInit, ɵConsole } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
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

export class PrayerComponent {
  prayer: Prayer;

  prayerForm: FormGroup;
  posturl: 'http://localhost:5000/api/PrayerRequest';
  idurl: 'http://localhost:5000/api/PrayerRequest/id';
  prayertodelete = 1;
  deleteRequest = 1;
  idtoUpdate = 1;
  displayData: boolean;
  fetchId = 1;
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(
    private httpClient: HttpClient,
    private prayerService: PrayerService,
    private formBuilder: FormBuilder,

  ) {
    // this.prayer = this.prayerService.getPrayer();
    this.prayerForm = this.formBuilder.group({
      id: Number,
      name: '',
      prayer: '',
      date: '',
      site: ''
    });
  }

  handlePost(prayerService: PrayerService): Observable<Prayer> {
    return this.httpClient.post<Prayer>(this.posturl, this.prayer, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }


  onSubmit(prayerService) {
    this.handlePost(prayerService).subscribe(data => console.log(data))
    console.log("hello");
    console.warn('Your prayer request has been submitted', prayerService);

    // this.prayer = this.prayerService.clearPrayer();
    this.prayerForm.reset();


  }

  getPrayer() {
    this.prayerService.getPrayer().subscribe(data => {
      this.prayer = data;
      this.displayData = true;
    });
  }

  addPrayer() {
    this.prayerService.addPrayer(this.prayerForm.value).subscribe(data => {
      this.prayer = data;
      console.log(this.prayer);
    });
    this.getPrayer();
  }


  updatePrayer() {
    this.prayerService.getPrayer().subscribe(data => {
      this.prayer = data;
      this.prayer.name = 'Updated Prayer';
      this.prayerService.updatePrayer(this.prayer).subscribe(data1 => {
        this.getPrayer();
      });
    });
  }

  deletePrayer() {
    this.prayerService.deletePrayer(this.deleteRequest).subscribe(data => {
      this.getPrayer();
    });
  }


  ngOnInit() {
    this.getPrayer();
  }

}




// import { Component, OnInit, ɵConsole } from '@angular/core';
// import { PrayerService } from '../../services/prayer.service';
// import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { post} from 'selenium-webdriver/http';
// import { throwError, Observable } from 'rxjs';
// import { tap, catchError, map} from 'rxjs/operators';
// import {Prayer } from '../../models/prayer';
// import { InMemoryDbService } from 'angular-in-memory-web-api';

// @Component({
//   selector: 'app-prayer',
//   templateUrl: './prayer.component.html',
//   styleUrls: ['./prayer.component.css']
// })


// export class PrayerComponent {
//   items;
//   prayerForm: FormGroup;
//   postURL: 'http://localhost:5000/api/PrayerRequest/';
//   headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
//   httpOptions = {
//     headers: this.headers
//   };





//   constructor(
//     private httpClient: HttpClient,
//     private prayerService: PrayerService,
//     private formBuilder: FormBuilder,

//     ) {
//       this.items = this.prayerService.getItems();
//       this.prayerForm = this.formBuilder.group({
//         name: '',
//         prayer: '',
//         date:'',
//         site: ''
//       });
//      }


//      handlePost(prayerData: Prayer): Observable<Prayer>{
//       return this.httpClient.post<Prayer>('http://localhost:5000/api/PrayerRequest/', prayerData, this.httpOptions).pipe(
//         tap(data => console.log(data)),
//         catchError(this.handleError)
//       );
//      }
//      private handleError(error: any) {
//       console.log(error);
//       return throwError(error);
//     }


//      onSubmit(prayerData) {
//       this.handlePost(prayerData).subscribe(data => console.log(data))
//       console.log("hello");
//       console.warn('Your prayer request has been submitted', prayerData);

//       this.items = this.prayerService.clearItems();
//       this.prayerForm.reset();

//       }
//       addPrayer (prayerData: Prayer): Observable<Prayer> { 
//        prayerData.id=null; 
//         return this.httpClient.post<Prayer>(this.postURL, prayerData, this.httpOptions).pipe(
//         tap(data => console.log(data)),
//         catchError(this.handleError)
//       );
//     }
//     // addPrayer() {
//     //   this.prayerService.addPrayer(this.prayerForm.value).subscribe(data => {
//     //     this.prayerForm = data;
//     //     console.log(this.pr);
//     //   });
//     //   this.getUsers();
//     // }

//         // postRequest(){
//         //   this.httpClient.post('http://localhost:5000/api/PrayerRequest/', JSON.stringify(this.prayerForm)).subscribe()
//         // }

//           // idtoUpdate = 1;
//   // updateUser() {
//   //   this.dataservice.getUser(this.idtoUpdate).subscribe(data => {
//   //     this.user = data;
//   //     this.user.age = 'Updated Age';
//   //     this.dataservice.updateUser(this.user).subscribe(data1 => {
//   //       this.getUsers();
//   //     });
//   //   });
//   //       updatePrayer(prayerData): Observable<Prayer>{
//   //         const url = `${this.postURL}/${Prayer.id}`;
//   //         return this.httpClient.put<Prayer>(this.postURL, prayerData, this.httpOptions).pipe(
//   //           map(() => prayerData),
//   //           catchError(this.handleError)
//   //         );
//   //       }



//  ngOnInit(){}

// }


