import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRowDirective } from './table-row.directive';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [TableComponent, TableRowDirective],
  imports: [CommonModule, PaginationModule],
  exports: [TableComponent, TableRowDirective],
})
export class TableModule {}
