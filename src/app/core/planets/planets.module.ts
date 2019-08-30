import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetRoutingModule } from './planet-routing-module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PlanetListComponent, PlanetDetailsComponent],
  imports: [CommonModule, PlanetRoutingModule, SharedModule]
})
export class PlanetsModule {}
