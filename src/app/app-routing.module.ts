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
    loadChildren: () =>
      {
        return import('./core/people/people.module').then(m => m.PeopleModule);
      }
  },
  {
    path: 'films',
    loadChildren: () =>
      {
        return import('./core/films/films.module').then(m => m.FilmsModule);
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
