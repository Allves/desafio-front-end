import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsRoutingModule } from './films-routing-module';

@NgModule({
  declarations: [FilmsDetailsComponent, FilmsListComponent],
  imports: [CommonModule, SharedModule, FilmsRoutingModule]
})
export class FilmsModule {}
