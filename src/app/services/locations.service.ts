import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { getElementDepthCount } from '@angular/core/src/render3/state';
import { Locations } from '../models/locations';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LocationsService {

  locations: Locations;

  URL: 'http://localhost:5000/api/Location';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getLocations(name: string): Observable<Locations> {
    return this.http.get<Locations>(this.URL).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addLocations(locations: Locations): Observable<Locations> {
    // prayer.firstName = null;
    return this.http.post<Locations>(this.URL, locations, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  updateLocations(locations: Locations): Observable<Locations> {
    // const updateurl = `${this.URL}/${prayer.lastName}`;
    return this.http.put<Locations>(this.URL, locations, this.httpOptions).pipe(
      tap(() => this.locations),
      catchError(this.handleError)
    );
  }

  deleteLocations(locations: Locations): Observable<Locations> {
    // const deleteurl = `${this.URL}/${prayer.firstName, prayer.lastName}`;
    return this.http.delete<Locations>(this.URL, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}



