import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesResolverGuard } from './guards/vehicles-resolver.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: VehiclesListComponent
  },
  {
    path: 'details/:id',
    component: VehicleDetailsComponent,
    resolve: {
      model: VehiclesResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule {}
