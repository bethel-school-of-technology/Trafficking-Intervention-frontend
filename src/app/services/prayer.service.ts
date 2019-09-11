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

  
  
  constructor(private http: HttpClient){}
 
  addToPrayer(items) {
    this.items.push(this.postURL, this.items);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}

