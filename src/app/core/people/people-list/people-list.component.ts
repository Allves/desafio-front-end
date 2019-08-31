import { IFilm } from './../../../model/film';
import { JSONService } from './../../../services/json.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IPeople } from '../../../model/people';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  @ViewChild('name', { static: false }) name: ElementRef;
  @ViewChild('gender', { static: false }) gender: ElementRef;

  public peoples: IPeople[];
  public films: IFilm[];

  public filter: { name: ''; gender: '' };

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

  handleSearch() {
    this.jsonService
      .getPeople()
      .subscribe((response: IPeople[]) => {
        this.peoples = response;

        if (this.name.nativeElement.value) {
          this.peoples = response.filter(e =>
            e.name.includes(this.name.nativeElement.value)
          );
        }

        if (this.gender.nativeElement.value) {
          this.peoples = response.filter(e =>
            e.gender.includes(this.gender.nativeElement.value)
          );
        }
      });
  }
}
