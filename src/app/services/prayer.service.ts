import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getElementDepthCount } from '@angular/core/src/render3/state';
// import { Prayer } from '../models/prayer';
// import { Observable } from 'rxjs';
// import { PrayerComponent } from '../components/prayer/prayer.component';
@Injectable({ 
  providedIn: 'root'
})
export class PrayerService {
  items = [];
  
  constructor(private http: HttpClient){}
  addToPrayer(items) {
    this.items.push(items);
  }

  getItems() {
    return this.items;
  }
  clearItems() {
    this.items = [];
    return this.items;
  }
}
