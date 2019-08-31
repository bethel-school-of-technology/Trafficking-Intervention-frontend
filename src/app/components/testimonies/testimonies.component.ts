import { Component, OnInit } from '@angular/core';
import { TestimoniesService } from '../../services/testimonies.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
