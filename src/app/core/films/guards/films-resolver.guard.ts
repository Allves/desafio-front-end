import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { JSONService } from 'src/app/services/json.service';
import { IFilm } from './../../../model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsResolverGuard implements Resolve<IFilm> {
  constructor(private jsonService: JSONService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IFilm | Observable<IFilm> | Promise<IFilm> {
    return this.jsonService.getUniqueFilm(route.params.id);
  }
}
