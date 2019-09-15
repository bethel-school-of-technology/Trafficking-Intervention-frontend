import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { getElementDepthCount } from '@angular/core/src/render3/state';
import { Prayer } from '../models/prayer';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PrayerService {

  prayer: Prayer;

  URL: 'http://localhost:5000/api/PrayerRequest/';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getPrayer(firstName: string, lastName: string): Observable<Prayer> {
    return this.http.get<Prayer>(this.URL).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addPrayer(prayer: Prayer): Observable<Prayer> {
    // prayer.firstName = null;
    return this.http.post<Prayer>(this.URL, prayer, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  updatePrayer(prayer: Prayer): Observable<Prayer> {
    // const updateurl = `${this.URL}/${prayer.lastName}`;
    return this.http.put<Prayer>(this.URL, prayer, this.httpOptions).pipe(
      tap(() => this.prayer),
      catchError(this.handleError)
    );
  }

  deletePrayer(prayer: Prayer): Observable<Prayer> {
    // const deleteurl = `${this.URL}/${prayer.firstName, prayer.lastName}`;
    return this.http.delete<Prayer>(this.URL, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}


