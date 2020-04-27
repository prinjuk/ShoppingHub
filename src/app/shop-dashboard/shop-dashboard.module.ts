import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShopDashboardComponent } from './shop-dashboard.component';
import { ShopFeedbackComponent } from './maincontent/shop-feedback/shop-feedback.component';
import { ShopinventoryComponent } from './maincontent/shopinventory/shopinventory.component';
import { ShopManageOrdersComponent } from './maincontent/shop-manage-orders/shop-manage-orders.component';
import { ShopManageOrdersTrackComponent } from './maincontent/shop-manage-orders-track/shop-manage-orders-track.component';



@NgModule({
  declarations: [MaincontentComponent, SidebarComponent, ShopDashboardComponent, ShopFeedbackComponent, ShopinventoryComponent, ShopManageOrdersComponent, ShopManageOrdersTrackComponent],
  imports: [
    CommonModule
  ]
})
export class ShopDashboardModule { }
