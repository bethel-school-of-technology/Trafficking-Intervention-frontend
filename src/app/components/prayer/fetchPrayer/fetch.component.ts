
import { Component } from '@angular/core';

@Component({
   selector: 'prayer-request',
   template: `<h1>  </h1>
   <button type="button" (click)="this.getApi()">See All Prayer Requests!</button>
   <ul *ngFor = "let data of apiData">
   <li>{{data.prayerRequests}} {{data.firstName}} {{data.lastName}}</li>
   </ul>
   `
})
export class GetRequestComponent {
   apiData;
   getApi() {
       const url = 'http://localhost:5000/api/values';
       fetch(url)
           .then(resp => resp.json())
           .then(resp => (this.apiData = resp));
   }
}