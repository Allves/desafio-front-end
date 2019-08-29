import { JSONService } from './../../services/json.service';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleRoutingModule } from './people-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PeopleDetailsComponent } from './people-details/people-details.component';

@NgModule({
  declarations: [PeopleListComponent, PeopleDetailsComponent],
  imports: [CommonModule, PeopleRoutingModule, SharedModule],
  providers: [JSONService]
})
export class PeopleModule {}
