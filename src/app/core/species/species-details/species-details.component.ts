import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilm } from 'src/app/model/film';
import { IPeople } from 'src/app/model/people';
import { IPlanet } from 'src/app/model/planet';
import { ISpecies } from 'src/app/model/species';
import { JSONService } from 'src/app/services/json.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss']
})
export class SpeciesDetailsComponent {
  public specie: ISpecies;
  public films: IFilm[];
  public characters: IPeople[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonService: JSONService
  ) {
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
