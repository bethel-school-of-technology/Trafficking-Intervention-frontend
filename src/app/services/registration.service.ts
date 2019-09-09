import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  items = [];
  
  
  constructor(private http: HttpClient){}

  addToUsers(items) {
    this.items.push(this.items);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}
