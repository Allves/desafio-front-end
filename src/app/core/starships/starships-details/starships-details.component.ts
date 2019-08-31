import { IStarship } from './../../../model/starship';
import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/model/people';
import { Router, ActivatedRoute } from '@angular/router';
import { JSONService } from 'src/app/services/json.service';

@Component({
  selector: 'app-starships-details',
  templateUrl: './starships-details.component.html',
  styleUrls: ['./starships-details.component.scss']
})
export class StarshipsDetailsComponent implements OnInit {

  public starship: IStarship;
  public characters: IPeople[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonService: JSONService
  ) {}

  ngOnInit() {
    this.starship = this.activatedRoute.snapshot.data.model;

    this.getPeople();
  }

  getPeople() {
    this.jsonService
      .getPeople()
      .subscribe(
        (response: IPeople[]) =>
          (this.characters = response.filter(f =>
            this.starship.pilots.includes(f.id)
          ))
      );
  }

  goToDetails(path: string, id: string) {
    this.router.navigate([`${path}/details/${id}`]);
  }
}
