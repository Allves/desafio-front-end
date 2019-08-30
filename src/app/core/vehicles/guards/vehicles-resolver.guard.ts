import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JSONService } from 'src/app/services/json.service';
import { IVehicle } from './../../../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesResolverGuard implements Resolve<IVehicle> {
  constructor(private jsonService: JSONService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IVehicle | Observable<IVehicle> | Promise<IVehicle> {
    return this.jsonService.getUniqueVehicle(route.params.id);
  }
}
