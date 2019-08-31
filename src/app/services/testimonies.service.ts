import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Testimonies } from '../models/testimonies';

@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {

  apiURL: string ='http://localhost:5000/api/values';
  postUrl: string ='http://localhost:4200/testimonies';

  constructor(private http: HttpClient) { }

//   public getTestimonies(){
//     return this.http.get<Testimonies[]>(`${this.apiURL}`);
// }
//   public createTestimonies(testimonies): Testimonies){
//     return this.http.post(`${this.postUrl}`, testimonies);
// }
// public updateTestimonies(testimonies: Testimonies){
//   return this.http.put(`${this.apiURL}`, testimonies);
// }

// public deleteTestimonies(testimonies: Testimonies){
//   return this.http.put(`${this.apiURL}`, testimonies);
// }
}
