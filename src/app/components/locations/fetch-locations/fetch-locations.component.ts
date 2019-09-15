
import { Component } from '@angular/core';

@Component({
   selector: 'locations-request',
   template: `<div class = 'display'>
   <button type="button" (click)="this.getApi()">See All Locations!</button>
   <ul *ngFor = "let data of apiData">
   <li>{{data.name}}</li>
   <li>{{data.address}}</li>
   <li>{{data.city}}</li>
   <li>{{data.state}}</li>
   <li>{{data.zipCode}}</li>
   <li>{{data.locationType}}</li>
   </ul>
   </div>
   `
})
export class FetchLocationsComponent {
   apiData;
   getApi() {
       const url = 'http://localhost:5000/api/Location';
       fetch(url)
           .then(resp => resp.json())
           .then(resp => (this.apiData = resp));
   }
}