import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { HttpClient } from '@angular/common/http';
// import { Prayer } from '../../models/prayer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})


export class PrayerComponent {
  items;
  prayerForm;
  postURL: 'http://localhost:5000/api/PrayerRequest';


  constructor(
    private prayerService: PrayerService,
    private formBuilder: FormBuilder,
    ) {
      this.items = this.prayerService.getItems();
      this.prayerForm = this.formBuilder.group({
        name: '',
        site: '',
        date:'',
        prayer: ''
      });
     }

     onSubmit(prayerData) {
      // Process checkout data here
      // this.items.post(this.postURL);
      console.warn('Your prayer request has been submitted', prayerData);
  
      this.items = this.prayerService.clearItems();
      this.prayerForm.reset();
    }
    getPrayer() {


  fetch(this.postURL,{
    method: 'POST',
    body: JSON.stringify(this.items),
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  .then(res => res.json())

.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));

    }
  
  ngOnInit()    {  }

}

// getPrayer() {
  // postURL: 'http://localhost:5000/api/PrayerRequest';

//   fetch(this.postURL,{
//     method: 'POST',
//     body: JSON.stringify(document.getElementById('postData')),
//     mode: 'cors', // no-cors, cors, *same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'omit',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));




      // .then(resp => resp.json())
      // .then(resp => {
      //   this.apiPrayerRequest.append(this.apiPrayerRequest, resp);
      //   this.httpClient.post(this.postURL, PrayerComponent).subscribe(Response => {console.log(Response)});
      //   // (this.apiPrayerRequest = resp)
      // });
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  //     postData(this.postURL, (document.getElementById('postData')))
  // .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  // .catch(error => console.error(error));
// }
//   function postData(url = '', data = PrayerService) {

//     // postURL: 'http://localhost:5000/api/PrayerRequest';
//     // Default options are marked with *
//       return fetch(this.postURL, {
//           method: 'POST', // *GET, POST, PUT, DELETE, etc.
//           mode: 'cors', // no-cors, cors, *same-origin
//           cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//           credentials: 'same-origin', // include, *same-origin, omit
//           headers: {
//               'Content-Type': 'application/json',
//               // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           redirect: 'follow', // manual, *follow, error
//           referrer: 'no-referrer', // no-referrer, *client
//           body: JSON.stringify(data), // body data type must match "Content-Type" header
//       })
//       .then(response => response.json()); // parses JSON response into native JavaScript objects 
//   }
// }

// }