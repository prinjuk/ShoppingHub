import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: HomeComponent,
    },
    {
      path: 'list', component: ListPageComponent,
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
