import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/model/film';
import { IPlanet } from 'src/app/model/planet';
import { ISpecies } from 'src/app/model/species';
import { IPeople } from 'src/app/model/people';
import { IStarship } from 'src/app/model/starship';
import { IVehicle } from 'src/app/model/vehicle';
import { Router, ActivatedRoute } from '@angular/router';
import { JSONService } from 'src/app/services/json.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss']
})
export class SpeciesDetailsComponent implements OnInit {
  public specie: ISpecies;
  public planets: IPlanet[];
  public films: IFilm[];
  public characters: IPeople[];
  public starships: IStarship[];
  public vehicles: IVehicle[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonService: JSONService
  ) {}

  ngOnInit() {
    this.specie = this.activatedRoute.snapshot.data.model;

    this.getPeople();
    this.getFilms();
  }

  getFilms() {
    this.jsonService
      .getFilms()
      .subscribe(
        (response: IFilm[]) =>
          (this.films = response.filter(f => this.specie.films.includes(f.id)))
      );
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe(
        (response: IPeople[]) =>
          (this.characters = response.filter(f =>
            this.specie.people.includes(f.id)
          ))
      );
  }

  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }
}
