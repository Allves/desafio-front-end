import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardListComponent } from './card-list/card-list.component';

const components = [CardListComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NgxPaginationModule],
  exports: [...components, NgxPaginationModule]
})
export class SharedModule {}
