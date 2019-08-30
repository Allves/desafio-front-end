import { FilmsModule } from './core/films/films.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full'
  },
  {
    path: 'people',
    loadChildren: () => {
      return import('./core/people/people.module').then(m => m.PeopleModule);
    }
  },
  {
    path: 'films',
    loadChildren: () => {
      return import('./core/films/films.module').then(m => m.FilmsModule);
    }
  },
  {
    path: 'planets',
    loadChildren: () => {
      return import('./core/planets/planets.module').then(m => m.PlanetsModule);
    }
  },
  {
    path: 'species',
    loadChildren: () => {
      return import('./core/species/species.module').then(m => m.SpeciesModule);
    }
  },
  {
    path: 'vehicles',
    loadChildren: () => {
      return import('./core/vehicles/vehicles.module').then(
        m => m.VehiclesModule
      );
    }
  },
  {
    path: 'starships',
    loadChildren: () => {
      return import('./core/starships/starships.module').then(
        m => m.StarshipsModule
      );
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
