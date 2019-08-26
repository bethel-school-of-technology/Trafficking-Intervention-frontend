import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent implements OnInit {

  constructor(private prayerService: PrayerService) { }
  // constructor() { }

  ngOnInit() {
  }

}
