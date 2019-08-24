import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'fetch-request',
//   template: `<h1> Test </h1>
//   <button type="button" (click)="this.getApi()">Click Me!</button>
//   <ul *ngFor = "let data of apiData">
//     <li>{{data}}</li>
//   </ul> 
//   `
// })

// @Component({
//   selector: 'app-fetch',
//   templateUrl: './fetch.component.html',
//   styleUrls: ['./fetch.component.css']
// })

@Component({
  selector: 'fetch-request',
  template: `<h1> Get Prayer Requests </h1>
  <button type="button" (click)="this.getApi()">Click Me!</button>
  <ul *ngFor = "let data of apiData">
  <li>{{data}} </li>
  </ul>
  `
})

export class GetRequestComponent {
  apiData;

  getApi(){
    const url = 'http://localhost:5000/api/values';
    fetch (url)
      .then(resp => resp.json())
      .then(resp => (this.apiData = resp));
  }
}
export class FetchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
