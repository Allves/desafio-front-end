import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesRoutingModule } from './vehicles-routing-module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [VehicleDetailsComponent, VehiclesListComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule,
  ]
})
export class VehiclesModule { }
