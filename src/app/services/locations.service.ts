import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  apiURL: string ='http://localhost:5000/api/values';
  postUrl: string ='http://localhost:4200/locations';

  items = [];
  
  
  constructor(private http: HttpClient){}

  addToLocations(items) {
    this.items.push(this.items);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

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
