import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPeople } from 'src/app/model/people';
import { ISpecies } from 'src/app/model/species';
import { JSONService } from 'src/app/services/json.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
  public species: ISpecies[];
  public peoples: IPeople[];

  constructor(
    private jsonService: JSONService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPeople();
    this.getSpecies();
  }

  getSpecies() {
    this.jsonService
      .getSpecies()
      .subscribe((response: ISpecies[]) => (this.species = response));
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
