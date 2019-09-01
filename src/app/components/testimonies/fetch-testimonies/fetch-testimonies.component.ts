import { Component } from '@angular/core';

@Component({
   selector: 'testimonies-request',
   template: `<h1>  </h1>
   <button type="button" (click)="this.getApi()">See All Testimonies!</button>
   <ul *ngFor = "let data of apiData">
   <li>{{data.firstName}} {{data.lastName}}</li>
<<<<<<< HEAD
   <li>{{data.testimony}}</li>
   <li>{{data.date}}</li>
   <li>{{data.sites}}</li>
=======
  <li>{{data.testimonies}}</li>
  <li>{{data.date}}</li>
  <li>{{data.sites}}</li>
>>>>>>> 513857ec29816fc309a22bc809c3f6141de1ee95
   </ul>
   `
})
export class FetchTestimoniesComponent {
   apiData;
   getApi() {
<<<<<<< HEAD
       const url = 'http://localhost:5000/api/Testimony';
=======
       const url = 'http://localhost:5000/api/Testimonies';
>>>>>>> 513857ec29816fc309a22bc809c3f6141de1ee95
       fetch(url)
           .then(resp => resp.json())
           .then(resp => (this.apiData = resp));
   }
}