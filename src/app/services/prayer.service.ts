import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Prayer } from '../models/prayer';


@Injectable({ 
  providedIn: 'root'
})
export class PrayerService {
  apiURL: string ='http://localhost:5000/api/values';
  // .then(console.log(apiUrl))
  // console.log(apiURL)
  // interface Post {
  //   title: string;
  //   body: string;
  // }

  constructor(private http: HttpClient) { }

  public getPrayerRequest(){
    return this.http.get<Prayer[]>(`${this.apiURL}`);
}

  public createPrayerRequest(prayerRequest: Prayer){
    return this.http.post(`${this.apiURL}`, prayerRequest);
}
public updatePrayerRequest(prayerRequest: Prayer){
  return this.http.put(`${this.apiURL}`, prayerRequest);
}

public deletePrayerRequest(prayerRequest: Prayer){
  return this.http.put(`${this.apiURL}`, prayerRequest);
}

  // getData() {
  //   const req = new HttpRequest('GET', this.url, {
  //     reportProgress: true
  //   });

  //   this.http.request(req).subscribe((event: HttpEvent<any>) => {
  //     switch (event.type) {
  //       case HttpEventType.Sent:
  //         console.log('Request sent!');
  //         break;
  //       case HttpEventType.ResponseHeader:
  //         console.log('Response header received!');
  //         break;
  //       case HttpEventType.DownloadProgress:
  //         const kbLoaded = Math.round(event.loaded / 1024);
  //         console.log(`Download in progress! ${ kbLoaded }Kb loaded`);
  //         break;
  //       case HttpEventType.Response:
  //         console.log('😺 Done!', event.body);
  //     }
  //   });
  // }
  // getData() {
  //   this.http.get(this.url, { responseType: 'text' }).subscribe(res => {
  //     this.data = res;
  //   });
  // }
}

