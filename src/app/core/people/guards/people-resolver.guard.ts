import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IPeople } from '../../model/people';
import { JSONService } from 'src/app/services/json.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleResolverGuard implements Resolve<IPeople> {
  constructor(private jsonService: JSONService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IPeople | Observable<IPeople> | Promise<IPeople> {

    return this.jsonService.getUniquePeople(route.params.id);
  }
}
