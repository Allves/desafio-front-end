import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesResolverGuard } from './guards/species-resolver.guard';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { SpeciesListComponent } from './species-list/species-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: SpeciesListComponent
  },
  {
    path: 'details/:id',
    component: SpeciesDetailsComponent,
    resolve: {
      film: SpeciesResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule {}
