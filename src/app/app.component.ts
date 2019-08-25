import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trafficking Interventions';
  apiUrl = 'http://localhost:5000/api/values';
  data: any;
  // added apiUrl

  // constructor(private http: HttpClient){
  //   this.getData();
  // }

  // getData(){
  //   return this.http.get(this.apiUrl)
  //   .then((res: Response) => res.json())
  // }
  // trying to figure out post and get
}

