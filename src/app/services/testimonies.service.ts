import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TestimoniesService {

  items = [];
  
  
  constructor(private http: HttpClient){}

  addToTestimony(items) {
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
