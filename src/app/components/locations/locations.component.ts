import { Component, OnInit, ɵConsole } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Locations } from '../../models/locations';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})

export class LocationsComponent implements OnInit{
  locations: Locations;
  locationsForm: FormGroup;
  URL = 'http://localhost:5000/api/Locations/';
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
      locationType: '',
    });
  }

  handlePost(locationsService: LocationsService): Observable<Locations> {
    return this.httpClient.post<Locations>(this.URL, this.locations, this.httpOptions).pipe(
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


  onSubmit(locationsService) {
    this.addLocations(locationsService).subscribe(data => console.log(data))
    console.log("hello");
    console.warn('Your prayer request has been submitted', locationsService);
    this.locationsForm.reset();


  }


  getLocations() {
    this.locationsService.getLocations(this.locations.name).subscribe(data => {
      this.locations = data;
      this.displayData = true;
    });
  }

  addLocations(locations: Locations): Observable<Locations> {
    return this.httpClient.post<Locations>(this.URL, locations, this.httpOptions)
  }

  updateLocations(locations: Locations){
    return this.locationsService.updateLocations(this.locations).subscribe(data => {
      this.locations = data;
      this.locations.name = 'Updated Location';
      this.locationsService.updateLocations(this.locations).subscribe(data1 => {
        this.getLocations();
      });
    });
  }

  deleteLocations(locations: Locations) {
    this.locationsService.deleteLocations(locations).subscribe(data => {
      this.getLocations();
    });
  }


  ngOnInit() {
    this.getLocations();
  }

}

