import { IPeople } from './../core/model/people';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JSONService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<IPeople[]> {
    return this.http.get<any>('../../../assets/db/people.json').pipe(
      tap(response =>
        response.results.sort((a: IPeople, b: IPeople) =>
          b.films.length > a.films.length
            ? 1
            : b.films.length < a.films.length
            ? -1
            : b.films.length === a.films.length
            ? a.name > b.name
              ? 1
              : a.name < b.name
              ? -1
              : 0
            : 0
        )
      ),
      map(response => response.results),
      catchError(this.handleError('getPeople', []))
    );
  }

  getUniquePeople(id: string): Observable<IPeople> {
    return this.http.get<any>('../../../assets/db/people.json').pipe(
      map(response => response.results.find(x => x.id.toString() === id)),
      catchError(this.handleError('getUniquePeople', []))
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
