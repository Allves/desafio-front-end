import { IVehicle } from './../../../model/vehicle';
import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/model/people';
import { Router, ActivatedRoute } from '@angular/router';
import { JSONService } from 'src/app/services/json.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  public vehicle: IVehicle;
  public characters: IPeople[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonService: JSONService
  ) {}

  ngOnInit() {
    this.vehicle = this.activatedRoute.snapshot.data.model;

    this.getPeople();
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe(
        (response: IPeople[]) =>
          (this.characters = response.filter(f =>
            this.vehicle.pilots.includes(f.id)
          ))
      );
  }

  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }
}
