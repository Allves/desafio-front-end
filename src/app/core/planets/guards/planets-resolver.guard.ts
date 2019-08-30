import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JSONService } from 'src/app/services/json.service';
import { IPlanet } from './../../../model/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsResolverGuard implements Resolve<IPlanet> {
  constructor(private jsonService: JSONService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IPlanet | Observable<IPlanet> | Promise<IPlanet> {
    return this.jsonService.getUniquePlanet(route.params.id);
  }
}
