import { Component, OnInit, ɵConsole  } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Locations } from '../../models/locations';
import { FetchLocationsComponent } from './fetch-locations/fetch-locations.component';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})

export class LocationsComponent {
  location: Locations;
  locationsForm: FormGroup;
  URL: 'http://localhost:5000/api/Location';
  displayData: boolean;
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };
  

  constructor(
    private httpClient: HttpClient,
    private locationsService: LocationsService,
    private formBuilder: FormBuilder,
    ) {
      this.locationsForm = this.formBuilder.group({
        name: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        locationType: ''
      });
     }

     handlePost(locationService: LocationsService): Observable<Locations> {
      return this.httpClient.post<Locations>(this.URL, this.location, this.httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
    }
  
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    }
  
    onSubmit(locationService) {
      this.addLocation(locationService).subscribe(data => console.log(data))
      console.log("hello");
      console.warn('Your testimony request has been submitted', locationService);
      this.locationsForm.reset();
    }
  
    getLocation() {
      this.locationsService.getLocation(this.location.name).subscribe(data => {
        this.location = data;
        this.displayData = true;
      });
    }
  
    addLocation(location: Locations): Observable<Locations> {
      return this.httpClient.post<Locations>(this.URL, location, this.httpOptions)
    }
  
    updateLocation(location: Locations){
      return this.locationsService.updateLocation(location).subscribe(data => {
        this.location = data;
        this.location.name = 'Updated Prayer';
        this.locationsService.updateLocation(this.location).subscribe(data1 => {
          this.getLocation();
        });
      });
    }
  
    deleteLocation(location: Locations) {
      this.locationsService.deleteLocation(location).subscribe(data => {
        this.getLocation();
      });
    }
  

  
    ngOnInit() {
      this.getLocation();
    }
  
  }
   