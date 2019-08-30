import { StarshipsRoutingModule } from './starships-routing-module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarshipsDetailsComponent } from './starships-details/starships-details.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';


@NgModule({
  declarations: [StarshipsListComponent, StarshipsDetailsComponent],
  imports: [CommonModule, StarshipsRoutingModule, SharedModule]
})
export class StarshipsModule {}
