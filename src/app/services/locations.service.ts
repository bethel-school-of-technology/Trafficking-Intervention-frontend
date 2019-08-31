import { Injectable } from '@angular/core';
import { Locations } from '../models/locations';
import { HttpClient } from '@angular/common/http';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  apiURL: string ='http://localhost:5000/api/values';
  postUrl: string ='http://localhost:4200/locations';

  constructor(private http: HttpClient) { }

//   public getLocations(){
//     return this.http.get<Locations[]>(`${this.apiURL}`);
// }
//   public createLocations(locations): Locations){
//     return this.http.post(`${this.postUrl}`, locations);
// }
// public updateLocationstestimonies: Locations){
//   return this.http.put(`${this.apiURL}`, locations);
// }

// public deleteLocations(locations: Locations){
//   return this.http.put(`${this.apiURL}`, locations);
// }
}
