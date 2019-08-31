import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent implements OnInit {

  constructor(private prayerService: PrayerService) { }
    // this.prayerService.getPrayerRequest().subscribe((res)=>{
    //   this.prayerService.getPrayerRequest(this.prayerService).subscribe((res)=>{
    //     console.log(res.body);
    //   });      
    // });
    ngOnInit(){
      // this.prayerService.getPrayerRequest().subscribe((res)=>{
      //   this.prayerService.getPrayerRequest(this.prayerService).subscribe((res)=>{
      //     console.log(res.body);
        // });      
      }}
      // <fetch-request></fetch-request>