import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator/paginator.component';

const components = [PaginatorComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class SharedModule {}
