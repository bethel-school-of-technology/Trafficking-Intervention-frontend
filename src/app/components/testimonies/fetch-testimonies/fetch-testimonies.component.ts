import { Component } from '@angular/core';

@Component({
   selector: 'testimonies-request',
   template: `<h1>  </h1>
   <button type="button" (click)="this.getApi()">See All Testimonies!</button>
   <ul *ngFor = "let data of apiData">
   <li>{{data.firstName}} {{data.lastName}}</li>
  <li>{{data.testimonies}}</li>
  <li>{{data.date}}</li>
  <li>{{data.sites}}</li>
   </ul>
   `
})
export class FetchTestimoniesComponent {
   apiData;
   getApi() {
       const url = 'http://localhost:5000/api/Testimonies';
       fetch(url)
           .then(resp => resp.json())
           .then(resp => (this.apiData = resp));
   }
}