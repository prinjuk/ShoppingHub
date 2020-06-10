import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MaincontentComponent } from './admin-dashboard/maincontent/maincontent.component';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './admin-dashboard/maincontent/dashboard/dashboard.component';
import { OrdersComponent } from './admin-dashboard/maincontent/orders/orders.component';
import { InventoryComponent } from './admin-dashboard/maincontent/inventory/inventory.component';
import { ManageusersComponent } from './admin-dashboard/maincontent/manageusers/manageusers.component';
import { ManageshopsComponent } from './admin-dashboard/maincontent/manageshops/manageshops.component';
import { FeedbackComponent } from './admin-dashboard/maincontent/feedback/feedback.component';
import { AppRoutingModule } from './../app-routing.module';
import { SharedComponentsModule } from '../sharedView/shared-components/shared-components.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AdminDashboardComponent, MaincontentComponent, SidebarComponent, DashboardComponent, OrdersComponent, InventoryComponent, ManageusersComponent, ManageshopsComponent, FeedbackComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    SharedComponentsModule,
    RouterModule.forRoot([


      {
        path: 'admin', component: AdminDashboardComponent,
        children: [
          { path: '', component: DashboardComponent, pathMatch: 'full'},
          {
            path: 'feedback', component: FeedbackComponent,
          },
          {
            path: 'dashboard', component: DashboardComponent,
          },
          {
            path: 'Inventory', component: InventoryComponent,
          },
          {
            path: 'manageshops', component: ManageshopsComponent,
          },
          {
            path: 'manageusers', component: ManageusersComponent,
          },
          {
            path: 'orderDetails', component: OrdersComponent,
          },
      ]
      },


      ]),
  ]
})
export class AdminDashboardModule { }
