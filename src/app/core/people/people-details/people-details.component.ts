import { Router, ActivatedRoute } from '@angular/router';
import { JSONService } from './../../../services/json.service';
import { Component, OnInit } from '@angular/core';
import { IPeople } from '../../model/people';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  public people: IPeople;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.people = this.activatedRoute.snapshot.data.people;
  }
}
