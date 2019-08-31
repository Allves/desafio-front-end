import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IFilm } from '../model/film';
import { IPeople } from '../model/people';
import { IPlanet } from '../model/planet';
import { ISpecies } from '../model/species';
import { IStarship } from '../model/starship';
import { IVehicle } from '../model/vehicle';


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

  getFilms(): Observable<IFilm[]> {
    return this.http.get<any>('../../../assets/db/films.json').pipe(
      tap(response =>
        response.results.sort((a: IFilm, b: IFilm) =>
          a.episode_id > b.episode_id ? 1 : a.episode_id < b.episode_id ? -1 : 0
        )
      ),
      map(response => response.results),
      catchError(this.handleError('getFilms', []))
    );
  }

  getPlanets(): Observable<IPlanet[]> {
    return this.http.get<any>('../../../assets/db/planets.json').pipe(
      tap(response =>
        response.results.sort((a: IPlanet, b: IPlanet) =>
          b.population > a.population || a.population === 'unknown'
            ? 1
            : b.population < a.population
            ? -1
            : 0
        )
      ),
      map(response => response.results),
      catchError(this.handleError('getPlanets', []))
    );
  }

  getSpecies(): Observable<ISpecies[]> {
    return this.http.get<any>('../../../assets/db/species.json').pipe(
      tap(response =>
        response.results.sort((a: ISpecies, b: ISpecies) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        )
      ),
      map(response => response.results),
      catchError(this.handleError('getSpecies', []))
    );
  }

  getStarships(): Observable<IStarship[]> {
    return this.http.get<any>('../../../assets/db/starships.json').pipe(
      tap(response =>
        response.results.sort((a: IStarship, b: IStarship) =>
          b.cost_in_credits > a.cost_in_credits ||
          a.cost_in_credits === 'unknown'
            ? 1
            : b.cost_in_credits < a.cost_in_credits
            ? -1
            : 0
        )
      ),
      map(response => response.results),
      catchError(this.handleError('getStarships', []))
    );
  }

  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<any>('../../../assets/db/vehicles.json').pipe(
      tap(response =>
        response.results.sort((a: IVehicle, b: IVehicle) =>
          b.cost_in_credits > a.cost_in_credits ||
          a.cost_in_credits === 'unknown'
            ? 1
            : b.cost_in_credits < a.cost_in_credits
            ? -1
            : 0
        )
      ),
      map(response => response.results),
      catchError(this.handleError('getVehicles', []))
    );
  }

  getUniquePlanet(id: number): Observable<IPlanet> {
    return this.http.get<any>('../../../assets/db/planets.json').pipe(
      map(response => response.results.find(x => x.id.toString() === id)),
      catchError(this.handleError('getUniquePlanet', []))
    );
  }

  getUniquePeople(id: number): Observable<IPeople> {
    return this.http.get<any>('../../../assets/db/people.json').pipe(
      map(response => response.results.find(x => x.id.toString() === id)),
      catchError(this.handleError('getUniquePeople', []))
    );
  }

  getUniqueFilm(id: number): Observable<IFilm> {
    return this.http.get<any>('../../../assets/db/films.json').pipe(
      map(response => response.results.find(x => x.id.toString() === id)),
      catchError(this.handleError('getUniqueFilm', []))
    );
  }

  getUniqueSpecies(id: number): Observable<ISpecies> {
    return this.http.get<any>('../../../assets/db/species.json').pipe(
      map(response => response.results.find(x => x.id.toString() === id)),
      catchError(this.handleError('getUniqueSpecies', []))
    );
  }

  getUniqueStarship(id: number): Observable<IStarship> {
    return this.http.get<any>('../../../assets/db/starships.json').pipe(
      map(response => response.results.find(x => x.id.toString() === id)),
      catchError(this.handleError('getUniqueStarship', []))
    );
  }

  getUniqueVehicle(id: number): Observable<IVehicle> {
    return this.http.get<any>('../../../assets/db/vehicles.json').pipe(
      map(response => response.results.find(x => x.id.toString() === id)),
      catchError(this.handleError('getUniqueVehicle', []))
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
