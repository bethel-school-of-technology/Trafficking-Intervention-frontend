import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Prayer } from '../models/prayer';
import { Observable } from 'rxjs';
// import { PrayerComponent } from '../components/prayer/prayer.component';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PrayerService {
  items = [];
  postURL: 'http://localhost:5000/api/PrayerRequest';

<<<<<<< HEAD
  
  
  constructor(private http: HttpClient){}
 
  addToPrayer(items) {
    this.items.push(this.postURL, this.items);
  }
=======
constructor(private http: HttpClient){}

>>>>>>> c43922db31d281752c6581fbecdc6cd3c23f813e

  postPrayer(items: any) {
    this.items.push(this.postURL,this.items)
  }
  getItems() {
    return this.items;
  }
  putItems() {
    return this.putItems;
  }
  patchItems() {
    return this.patchItems;
  }
  deleteItems() {
    return this.deleteItems;
  }

}

