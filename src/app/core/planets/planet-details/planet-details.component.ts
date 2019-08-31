import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPeople } from 'src/app/model/people';
import { IPlanet } from 'src/app/model/planet';
import { JSONService } from 'src/app/services/json.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  public planet: IPlanet;
  public characters: IPeople[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonService: JSONService
  ) {}

  ngOnInit() {
    this.planet = this.activatedRoute.snapshot.data.model;

    this.getPeople();
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe(
        (response: IPeople[]) =>
          (this.characters = response.filter(f =>
            this.planet.residents.includes(f.id)
          ))
      );
  }

  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }
}
