import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilm } from 'src/app/model/film';
import { ISpecies } from 'src/app/model/species';
import { IStarship } from 'src/app/model/starship';
import { IVehicle } from 'src/app/model/vehicle';
import { IPeople } from '../../../model/people';
import { JSONService } from './../../../services/json.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  public people: IPeople;
  public films: IFilm[];
  public starships: IStarship[];
  public vehicles: IVehicle[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonService: JSONService
  ) {}

  ngOnInit() {
    this.people = this.activatedRoute.snapshot.data.model;

    this.getFilms();
    this.getVehicles();
    this.getStarships();
  }

  getStarships() {
    this.jsonService
      .getStarships()
      .subscribe(
        (response: IStarship[]) =>
          (this.starships = response.filter(f =>
            this.people.starships.includes(f.id)
          ))
      );
  }

  getVehicles() {
    this.jsonService
      .getVehicles()
      .subscribe(
        (response: IVehicle[]) =>
          (this.vehicles = response.filter(f =>
            this.people.vehicles.includes(f.id)
          ))
      );
  }

  getFilms() {
    this.jsonService
      .getFilms()
      .subscribe(
        (response: IFilm[]) =>
          (this.films = response.filter(f => this.people.films.includes(f.id)))
      );
  }

  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }
}
