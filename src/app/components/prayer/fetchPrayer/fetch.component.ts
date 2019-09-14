
import { Component } from '@angular/core';

@Component({
   selector: 'prayer-request',
   template: `<div class = 'display'>
   <button type="button" (click)="this.getApi()">See All Prayer Requests!</button>
   <ul *ngFor = "let data of apiData">
   <li>{{data.firstName}} {{data.lastName}}</li>
   <li>{{data.prayer}}</li>
   <li>{{data.date}}</li>
   <li>{{data.site}}</li>
   </ul>
   </div>
   `
})
export class GetRequestComponent {
   apiData;
   getApi() {
       const url = 'http://localhost:5000/api/PrayerRequest';
       fetch(url)
           .then(resp => resp.json())
           .then(resp => {
              console.log(resp);
              this.apiData = resp});
   }
}

// export class PostRequestComponent {

// }