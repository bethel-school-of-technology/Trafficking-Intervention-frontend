import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Prayer } from '../models/prayer';


@Injectable({ 
  providedIn: 'root'
})
export class PrayerService {
  apiURL: string ='http://localhost:5000/api/values';
  postUrl: string ='http://localhost:4200/prayer';

  constructor(private http: HttpClient) { }

  public getPrayerRequest(){
    return this.http.get<Prayer[]>(`${this.apiURL}`);
}
  public createPrayerRequest(prayerRequest: Prayer){
    return this.http.post(`${this.postUrl}`, prayerRequest);
}
public updatePrayerRequest(prayerRequest: Prayer){
  return this.http.put(`${this.apiURL}`, prayerRequest);
}

public deletePrayerRequest(prayerRequest: Prayer){
  return this.http.put(`${this.apiURL}`, prayerRequest);
}

}

