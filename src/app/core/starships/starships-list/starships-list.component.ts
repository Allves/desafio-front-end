import { IStarship } from './../../../model/starship';
import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/model/people';
import { JSONService } from 'src/app/services/json.service';
import { Router } from '@angular/router';
import { IVehicle } from 'src/app/model/vehicle';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {
  public starships: IStarship[];
  public peoples: IPeople[];

  constructor(private jsonService: JSONService, private router: Router) {}

  ngOnInit() {
    this.getPeople();
    this.getStarships();
  }

  getStarships() {
    this.jsonService
      .getStarships()
      .subscribe((response: IStarship[]) => (this.starships = response));
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
