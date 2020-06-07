import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { DatatableComponent } from '../../sharedView/datatable/datatable.component';


@NgModule({
  declarations: [DatatableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [DatatableComponent],
})
export class SharedComponentsModule { }
