import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';
import { Testimonies } from './../../../models/testimonies';

@Component({
  selector: 'app-display-testimonies',
  templateUrl: './display-testimonies.component.html',
  styleUrls: ['./display-testimonies.component.css']
})
export class DisplayTestimoniesComponent implements OnInit {
private testimoniesRoute = 'http://localhost:5000/api/Testimony';
public testimonies: Testimonies[];
  constructor(private http: HttpClient) { }

  getTestimonies() {
    this.http.get<Testimonies[]>(this.testimoniesRoute).subscribe(testimonies => {
      this.testimonies = testimonies;
      console.log('Testimonies', this.testimonies);
    });
  }
  ngOnInit() {
    this.getTestimonies();
  }

}
