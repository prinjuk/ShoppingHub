import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './Main-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [],
  exports:[MainRoutingModule]
})
export class CustomersModule { }