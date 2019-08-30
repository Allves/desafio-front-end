import { IPlanet } from './../../model/planet';
import { JSONService } from './../../../services/json.service';
import { IFilm } from './../../model/film';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent implements OnInit {
  public film: IFilm;
  public planets: IPlanet[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonService: JSONService
  ) {}

  ngOnInit() {
    this.film = this.activatedRoute.snapshot.data.film;
    this.getPlanets();
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

  getPlanet(id: string) {
    // this.jsonService.getUniquePlanet(id)
    // .subscribe((response: IPlanet) => (response));
  }

  goToPlanetDetails(planet: IPlanet) {

  }
}
