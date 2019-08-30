import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JSONService } from 'src/app/services/json.service';
import { IStarship } from './../../../model/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipsResolverGuard implements Resolve<IStarship> {
  constructor(private jsonService: JSONService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IStarship | Observable<IStarship> | Promise<IStarship> {
    return this.jsonService.getUniqueStarship(route.params.id);
  }
}
