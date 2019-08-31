import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPeople } from 'src/app/model/people';
import { IPlanet } from 'src/app/model/planet';
import { JSONService } from 'src/app/services/json.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  public planets: IPlanet[];
  public peoples: IPeople[];

  constructor(
    private jsonService: JSONService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPeople();
    this.getPlanets();
  }

  getPlanets() {
    this.jsonService
      .getPlanets()
      .subscribe((response: IPlanet[]) => (this.planets = response));
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
