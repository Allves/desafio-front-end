import { IFilm } from './../../../model/film';
import { JSONService } from './../../../services/json.service';
import { Component, OnInit } from '@angular/core';
import { IPeople } from '../../../model/people';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  public peoples: IPeople[];
  public films: IFilm[];

  constructor(
    private jsonService: JSONService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getFilms();
    this.getPeople();
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe((response: IPeople[]) => (this.peoples = response));
  }

  filter(value: string) {}

  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }

  getFilms() {
    this.jsonService
      .getFilms()
      .subscribe((response: IFilm[]) => (this.films = response));
  }

  getFilmName(id: number) {
    return this.films.find(x => x.id === id).title;
  }
}
