import { IVehicle } from './../../../model/vehicle';
import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/model/people';
import { JSONService } from 'src/app/services/json.service';
import { Router } from '@angular/router';
import { IPlanet } from 'src/app/model/planet';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  public vehicles: IVehicle[];
  public peoples: IPeople[];

  constructor(
    private jsonService: JSONService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPeople();
    this.getVehicles();
  }

  getVehicles() {
    this.jsonService
      .getVehicles()
      .subscribe((response: IVehicle[]) => (this.vehicles = response));
  }

  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe((response: IPeople[]) => (this.peoples = response));
  }

  getPeopleName(id: number) {
    return this.peoples.find(x => x.id === id).name;
  }
}
