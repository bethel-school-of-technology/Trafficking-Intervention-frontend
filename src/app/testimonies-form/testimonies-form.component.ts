import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Testimonies } from './../models/testimonies';


@Component({
  selector: 'app-testimonies-form',
  templateUrl: './testimonies-form.component.html',
  styleUrls: ['./testimonies-form.component.css']
})
export class TestimoniesFormComponent implements OnInit {
model: Testimonies = new Testimonies();
  constructor() { }

  ngOnInit() {
  }
onSubmit() {
  console.log('Submit Successful: ', this.model);
 }
}
