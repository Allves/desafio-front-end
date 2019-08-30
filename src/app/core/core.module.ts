import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module';
import { JSONService } from './../services/json.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PeopleModule,
    FilmsModule
  ],
  providers: [JSONService]
})
export class CoreModule { }
