import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTestimoniesComponent } from './display-testimonies/display-testimonies.component';

@NgModule({
  declarations: [DisplayTestimoniesComponent],
  imports: [
    CommonModule
  ],
  exports: [DisplayTestimoniesComponent]
})
export class TestimoniesModule { }
