import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleRoutingModule } from './people-routing-module';

@NgModule({
  declarations: [PeopleListComponent, PeopleDetailsComponent],
  imports: [CommonModule, PeopleRoutingModule, SharedModule],

})
export class PeopleModule {}
