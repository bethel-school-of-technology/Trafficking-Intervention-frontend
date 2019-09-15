import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { getElementDepthCount } from '@angular/core/src/render3/state';
import { Testimonies } from '../models/testimonies';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TestimoniesService {

  testimony: Testimonies;
  URL: 'http://localhost:5000/api/Testimony/';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getTestimony(firstName: string, lastName: string): Observable<Testimonies> {
    return this.http.get<Testimonies>(this.URL).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addPrayer(testimony: Testimonies): Observable<Testimonies> {
    return this.http.post<Testimonies>(this.URL, testimony, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  updateTestimony(testimony: Testimonies): Observable<Testimonies> {
    // const updateurl = `${this.URL}/${prayer.lastName}`;
    return this.http.put<Testimonies>(this.URL, testimony, this.httpOptions).pipe(
      tap(() => this.testimony),
      catchError(this.handleError)
    );
  }

  deleteTestimony(testimony: Testimonies): Observable<Testimonies> {
    // const deleteurl = `${this.URL}/${prayer.firstName, prayer.lastName}`;
    return this.http.delete<Testimonies>(this.URL, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}





