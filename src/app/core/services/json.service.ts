import { IPeople } from './../model/people';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JSONService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get('./../../../assets/db/people.json').pipe(
      map(response => response.results as IPeople[]),
      catchError(this.handleError('getPeople', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
