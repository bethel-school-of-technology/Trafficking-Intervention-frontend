
import { Component } from '@angular/core';

@Component({
   selector: 'locations-request',
   template: `<h1>  </h1>
   <button type="button" (click)="this.getApi()">See All Locations!</button>
   <ul *ngFor = "let data of apiData">
   <li>{{data.prayerRequests}} {{data.firstName}} {{data.lastName}}</li>
   </ul>
   `
})
export class FetchLocationsComponent {
   apiData;
   getApi() {
       const url = 'http://localhost:5000/api/values';
       fetch(url)
           .then(resp => resp.json())
           .then(resp => (this.apiData = resp));
   }
}