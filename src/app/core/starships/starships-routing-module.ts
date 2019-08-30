import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsResolverGuard } from './guards/starships-resolver.guard';
import { StarshipsDetailsComponent } from './starships-details/starships-details.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: StarshipsListComponent
  },
  {
    path: 'details/:id',
    component: StarshipsDetailsComponent,
    resolve: {
      model: StarshipsResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule {}
