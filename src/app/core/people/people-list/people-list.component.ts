import { JSONService } from './../../../services/json.service';
import { Component, OnInit } from '@angular/core';
import { IPeople } from '../../model/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  public peoples: IPeople[];

  constructor(private jsonService: JSONService) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe((response: IPeople[]) => (this.peoples = response));
  }

  filter(value: string) {

  }
}
