import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Prayer } from '../models/prayer';

@Injectable({ 
  providedIn: 'root'
})
export class PrayerService {
  apiURL: string ='http://localhost:5000/api/values';
  postURL: string ='http://localhost:4200';

  constructor(private http: HttpClient) { }
  // router.post('/prayer', function (req, res, next) {
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
 createPrayerRequest(prayerRequest: Prayer){
    return this.http.post(`${this.postURL}/prayer`, prayerRequest);
}
public updatePrayerRequest(prayerRequest: Prayer){
  return this.http.put(`${this.apiURL}`, prayerRequest);
}

public deletePrayerRequest(prayerRequest: Prayer){
  return this.http.put(`${this.apiURL}`, prayerRequest);
}

}

