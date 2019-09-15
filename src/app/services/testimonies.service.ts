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

  testimonies: Testimonies;

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

  getTestimonies(firstName: string, lastName: string): Observable<Testimonies> {
    return this.http.get<Testimonies>(this.URL).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addTestimonies(testimonies: Testimonies): Observable<Testimonies> {
    // prayer.firstName = null;
    return this.http.post<Testimonies>(this.URL, testimonies, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  updateTestimonies(testimonies: Testimonies): Observable<Testimonies> {
    // const updateurl = `${this.URL}/${prayer.lastName}`;
    return this.http.put<Testimonies>(this.URL, testimonies, this.httpOptions).pipe(
      tap(() => this.testimonies),
      catchError(this.handleError)
    );
  }

  deleteTestimonies(prayer: Testimonies): Observable<Testimonies> {
    // const deleteurl = `${this.URL}/${prayer.firstName, prayer.lastName}`;
    return this.http.delete<Testimonies>(this.URL, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}







