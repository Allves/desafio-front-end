import { IPlanet } from './../../../model/planet';
import { JSONService } from './../../../services/json.service';
import { IFilm } from './../../../model/film';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ISpecies } from '../../../model/species';
import { IStarship } from '../../../model/starship';
import { IVehicle } from '../../../model/vehicle';
import { IPeople } from '../../../model/people';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent implements OnInit {
  public film: IFilm;
  public planets: IPlanet[];
  public species: ISpecies[];
  public characters: IPeople[];
  public starships: IStarship[];
  public vehicles: IVehicle[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonService: JSONService
  ) {}

  ngOnInit() {
    this.film = this.activatedRoute.snapshot.data.film;
    this.getPlanets();
    this.getPeople();
    this.getVehicles();
    this.getSpecies();
    this.getStarships();
  }

  getPlanets() {
    this.jsonService
      .getPlanets()
      .subscribe(
        (response: IPlanet[]) =>
          (this.planets = response.filter(f =>
            this.film.planets.includes(f.id)
          ))
      );
  }

  getSpecies() {
    this.jsonService
      .getSpecies()
      .subscribe(
        (response: ISpecies[]) =>
          (this.species = response.filter(f =>
            this.film.species.includes(f.id)
          ))
      );
  }

  getStarships() {
    this.jsonService
      .getStarships()
      .subscribe(
        (response: IStarship[]) =>
          (this.starships = response.filter(f =>
            this.film.starships.includes(f.id)
          ))
      );
  }

  getVehicles() {
    this.jsonService
      .getVehicles()
      .subscribe(
        (response: IVehicle[]) =>
          (this.vehicles = response.filter(f =>
            this.film.vehicles.includes(f.id)
          ))
      );
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe(
        (response: IPeople[]) =>
          (this.characters = response.filter(f =>
            this.film.characters.includes(f.id)
          ))
      );
  }

  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }
}
