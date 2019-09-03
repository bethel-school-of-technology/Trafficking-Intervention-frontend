import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { HttpClient } from '@angular/common/http';
import { Prayer } from '../../models/prayer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrayerRequest } from '../../services/prayer.service';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent {

postURL: 'http://localhost:5000/api/PrayerRequest';

// apiPrayerRequest; 

// fetchPrayerRequest(): Observable<PrayerRequest> {
//   const newPrayerRequest = {

//   }
// }
// PrayerComponent.fetch(this.postURL, {
//   method: 'POST',
//   body: new FormData(document.getElementById('postData')
// })

getPrayerRequest() {
  postURL: 'http://localhost:5000/api/PrayerRequest';

  fetch(this.postURL,{
    method: 'POST',
    body: JSON.stringify(document.getElementById('postData')),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
      // .then(resp => resp.json())
      // .then(resp => {
      //   this.apiPrayerRequest.append(this.apiPrayerRequest, resp);
      //   this.httpClient.post(this.postURL, PrayerComponent).subscribe(Response => {console.log(Response)});
      //   // (this.apiPrayerRequest = resp)
      // });
}





  constructor(private httpClient: HttpClient) { }

  // getPrayer(){
  //   return this.httpClient.get<Prayer>(this.postURL)
  // };

//   prayer: Prayer;
// showPrayer(){
//   this.prayerService.getPrayerRequest()
//   .subscribe((data: Prayer) => this.prayer = {...data});
// }
  
  ngOnInit()    {  }
  // fetch(postURL)
  // .then(res => res.blob()) // Gets the response and returns it as a blob
  // .then(blob => {
  //   var formData = new FormData();
  //   formData.append("file", blob);

  //   this.http.post(prayerRequest, formData).subscribe(response => {
  //       console.log(response);
  //   });

  // });
  // from: https://stackoverflow.com/questions/57628638/angular-send-remote-file-with-angular-http-form-data

  // postPrayerRequest(): void {
  //   const newPrayerRequest: PrayerRequest = Object.assign({}, this.prayerRequest);
  //   this._prayerRequestService.post(this.prayerRequest).subscribe(
  //     (data: PrayerRequest) => {
  //       console.log(data);
  //       this.createPrayerRequestForm.reset();
  //       this._router.navigate(['list']);
  //     },
  //     (error: any) => console.log(error)
  //     );
  // from: https://www.youtube.com/watch?v=B1LRD7oMYDo
 
  //   this.http.post<Prayer[]>(this.postURL).subscribe(prayerRequest=>{
  //     this.prayerRequest = prayerRequest;
  //   })
  
  // ** from exeter front end foundations http lesson page 7
  // this.prayer
    // this.prayerService.getPrayerRequest().subscribe((res)=>{
    //   this.prayerService.getPrayerRequest(this.prayerService).subscribe((res)=>{
    //     console.log(res.body);
    //   });      
    // });
    // ngOnInit(){
      // this.prayerService.getPrayerRequest().subscribe((res)=>{
      //   this.prayerService.getPrayerRequest(this.prayerService).subscribe((res)=>{
      //     console.log(res.body);
        // });      
      // }}
}