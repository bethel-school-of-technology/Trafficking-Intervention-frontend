import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { Prayer } from '../../../models/prayer';


@Component({
  selector: 'app-display-prayer',
  templateUrl: './display-prayer.component.html',
  styleUrls: ['./display-prayer.component.css']
})
export class DisplayPrayerComponent implements OnInit {
private prayerRoute = 'http://localhost:5000/api/PrayerRequest';
public prayer: Prayer[];
  constructor(private http: HttpClient) { }

  getPrayer() {
    this.http.get<Prayer[]>(this.prayerRoute).subscribe(prayer => {
      this.prayer = prayer;
      console.log('Prayer', this.prayer);
    });
  }

  ngOnInit() {
    this.getPrayer();
  }

}
