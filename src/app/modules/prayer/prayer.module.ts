import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPrayerComponent } from './display-prayer/display-prayer.component';

@NgModule({
  declarations: [DisplayPrayerComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [DisplayPrayerComponent]
})
export class PrayerModule { }
