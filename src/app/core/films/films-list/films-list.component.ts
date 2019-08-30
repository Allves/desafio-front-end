import { IPeople } from './../../../model/people';
import { IFilm } from './../../../model/film';
import { Component, OnInit } from '@angular/core';
import { JSONService } from 'src/app/services/json.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  public films: IFilm[];
  public peoples: IPeople[];

  constructor(
    private jsonService: JSONService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPeople();
    this.getFilms();
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe((response: IPeople[]) => (this.peoples = response));
  }



  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }

  getFilms() {
    this.jsonService
      .getFilms()
      .subscribe((response: IFilm[]) => (this.films = response));
  }

  getPeopleName(id: number) {

    return this.peoples.find(x => x.id === id).name;
  }
}
