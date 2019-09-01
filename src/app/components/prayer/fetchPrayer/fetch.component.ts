
import { Component } from '@angular/core';

@Component({
   selector: 'prayer-request',
   template: `<h1> </h1>
   <button type="button" (click)="this.getApi()">See All Prayer Requests!</button>
   <ul *ngFor = "let data of apiData">
   <li>{{data.firstName}} {{data.lastName}}</li>
<<<<<<< HEAD
   <li>{{data.prayerRequest}}</li>
=======
   <li>{{data.prayerRequests}}</li>
>>>>>>> 513857ec29816fc309a22bc809c3f6141de1ee95
   <li>{{data.date}}</li>
   <li>{{data.sites}}</li>
   </ul>
   `
})
export class GetRequestComponent {
   apiData;
   getApi() {
       const url = 'http://localhost:5000/api/PrayerRequest';
       fetch(url)
           .then(resp => resp.json())
           .then(resp => (this.apiData = resp));
   }
}

export class PostRequestComponent {
   
}