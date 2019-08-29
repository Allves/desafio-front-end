import { JSONService } from './../services/json.service';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleRoutingModule } from './people-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PeopleListComponent],
  imports: [CommonModule, PeopleRoutingModule],
  providers: [JSONService]
})
export class PeopleModule {}
