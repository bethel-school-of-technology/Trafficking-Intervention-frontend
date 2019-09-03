import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Prayer } from '../models/prayer';
import { Observable } from 'rxjs';
import { PrayerComponent } from '../components/prayer/prayer.component';

export interface PrayerRequest {
  id: number;
  firstName: string;
  lastName: string;
  prayer: string;
  date: Date;
  site: string;
}

// getPrayer(){
//   return this.http.get<Prayer>(this.postURL)
// };

@Injectable({ 
  providedIn: 'root'
})


export class PrayerService {
apiURL: string ='http://localhost:5000/api/PrayerRequest';
postURL: string ='http://localhost:5000/api/PrayerRequest';

// constructor(private http: HttpClient){}
// getPrayer(){
//   return this.http.get<Prayer>(this.postURL)
// };

// prayer: Prayer;
// showPrayer(){
//   this.
// }
  // httpClient: any;

// // @Injectable({
//   providedIn: 'root'
// })
// export class ShippingService {

//   private shippingURL : string = 'api/Shipping/shippingDoc';
//   constructor(private http: HttpClient) { }

//   postShippingDocForm(shippingDoc : ShippingDoc) : Observable<any> {
//     var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
//     var test = {name: "hello"} //dummy data
//     return this.http.post(this.shippingURL, test, {headers: headers});
//   }
// }

  constructor(private http: HttpClient) { }
  postPrayerequest(prayerRequest : PrayerRequest) : Observable<any> {
        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var test = {name: "hello"} //dummy data
        return this.http.post(this.postURL, test, {headers: headers});
      }

  // callServer(data: {content: string}): Observable<any> {
  //   return this.httpClient.post(this.postURL, data);
  // }

  // private listPrayerRequest: PrayerRequest[] = [

  // ];

  // postPrayerRequest(){
  //   this.http.post<PrayerRequest[]>(this.postURL).subscribe(prayerRequest=>{
  //     this.prayerRequest = prayerRequest;
  //   })
  // }
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


// post(prayerRequest: PrayerRequest): Observable<PrayerRequest>{
//   if (prayerRequest.id === null){
//     return this.http.post<PrayerRequest>(this.postURL, prayerRequest, {
//       headers: new HttpHeaders ({
//         'Content-Type': 'application/json'
//       })
//     })
//     .pipe (catchError(this.handleError));
//     this.listPrayerRequest.push(prayerRequest);
//   } else {
//     const foundIndex = this.listPrayerRequest.findIndex (e => e.id === prayerRequest.id);
//     this.listPrayerRequest[foundIndex] = prayerRequest;
//   }
// }
// from: https://www.youtube.com/watch?v=B1LRD7oMYDo

// createPrayerRequest(prayerRequest: Prayer): Observable<Prayer>{
//     return this.http.post<Prayer>(`${this.postURL}`, prayerRequest);
// }



// public updatePrayerRequest(prayerRequest: Prayer){
//   return this.http.put(`${this.apiURL}`, prayerRequest);
// }

// public deletePrayerRequest(prayerRequest: Prayer){
//   return this.http.put(`${this.apiURL}`, prayerRequest);
// }

}

