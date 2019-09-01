import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Prayer } from '../models/prayer';

export interface PrayerRequest {
  id: number;
  firstName: string;
  lastName: string;
  prayer: string;
  date: Date;
  site: string;
}

@Injectable({ 
  providedIn: 'root'
})

export class PrayerService {
  apiURL: string ='http://localhost:5000/api/PrayerRequest';
  postURL: string ='http://localhost:5000/api/PrayerRequest';

  constructor(private http: HttpClient) { }
  // router.post(apiURL, function (req, res, next) {
  //   models.prayer.create(req.body)
  //     .then(newPrayerRequest => {
  //       res.setHeader('Content-Type', 'application/json');
  //       res.send(JSON.stringify(newPrayerRequest));
  //     })
  //     .catch(err => {
  //       res.status(400);
  //       res.send(err.message);
  //     });
  // });

  public getPrayerRequest(){
    return this.http.get<Prayer[]>(`${this.apiURL}`);
}

public createPrayerRequest(prayerRequest: Prayer){
    return this.http.post(`${this.postURL}`, prayerRequest);
}

public updatePrayerRequest(prayerRequest: Prayer){
  return this.http.put(`${this.apiURL}`, prayerRequest);
}

public deletePrayerRequest(prayerRequest: Prayer){
  return this.http.put(`${this.apiURL}`, prayerRequest);
}

}

