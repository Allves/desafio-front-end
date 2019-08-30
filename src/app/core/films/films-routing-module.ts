import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsResolverGuard } from './guards/films-resolver.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: FilmsListComponent
  },
  {
    path: 'details/:id',
    component: FilmsDetailsComponent,
    resolve: {
      model: FilmsResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {}
