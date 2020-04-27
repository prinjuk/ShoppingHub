import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MaincontentComponent } from './admin-dashboard/maincontent/maincontent.component';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './admin-dashboard/maincontent/dashboard/dashboard.component';
import { OrdersComponent } from './admin-dashboard/maincontent/orders/orders.component';
import { InventoryComponent } from './admin-dashboard/maincontent/inventory/inventory.component';
import { ManageusersComponent } from './admin-dashboard/maincontent/manageusers/manageusers.component';
import { ManageshopsComponent } from './admin-dashboard/maincontent/manageshops/manageshops.component';
import { FeedbackComponent } from './admin-dashboard/maincontent/feedback/feedback.component';




@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AdminDashboardComponent, MaincontentComponent, SidebarComponent, DashboardComponent, OrdersComponent, InventoryComponent, ManageusersComponent, ManageshopsComponent, FeedbackComponent],
  imports: [
    CommonModule
  ]
})
export class AdminDashboardModule { }
