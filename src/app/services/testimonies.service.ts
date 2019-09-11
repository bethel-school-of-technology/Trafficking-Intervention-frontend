import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {
  items = [];
  postURL: 'http://localhost:5000/api/Testimonies';

  constructor(private http: HttpClient){}

  postTestimony(items: any) {
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
