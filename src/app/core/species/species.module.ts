import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesRoutingModule } from './species-routing-module';

@NgModule({
  declarations: [SpeciesListComponent, SpeciesDetailsComponent],
  imports: [CommonModule, SpeciesRoutingModule, SharedModule]
})
export class SpeciesModule {}
