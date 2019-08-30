import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator/paginator.component';
import { CardListComponent } from './card-list/card-list.component';

const components = [PaginatorComponent, CardListComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class SharedModule {}
