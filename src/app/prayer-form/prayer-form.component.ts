import { Component, OnInit } from '@angular/core';
import { Prayer } from './../models/prayer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-prayer-form',
  templateUrl: './prayer-form.component.html',
  styleUrls: ['./prayer-form.component.css']
})
export class PrayerFormComponent implements OnInit {
model: Prayer = new Prayer();
  constructor() { }

  ngOnInit() {
  }
onSubmit() {
  console.log('Submit Successful: ', this.model);
 }
}
