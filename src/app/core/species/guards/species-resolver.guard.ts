import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JSONService } from 'src/app/services/json.service';
import { ISpecies } from './../../../model/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesResolverGuard implements Resolve<ISpecies> {
  constructor(private jsonService: JSONService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ISpecies | Observable<ISpecies> | Promise<ISpecies> {
    return this.jsonService.getUniqueSpecies(route.params.id);
  }
}
