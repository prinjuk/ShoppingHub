import { NgModule } from '@angular/core';
import { RouterModule, Router,Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from './admin-dashboard/maincontent/dashboard/dashboard.component';
import { FeedbackComponent } from './admin-dashboard/maincontent/feedback/feedback.component';
import { InventoryComponent } from './admin-dashboard/maincontent/inventory/inventory.component';
import { EngagementComponent } from './admin-dashboard/maincontent/inventory/engagement/engagement.component';
import { AddinventoryComponent } from './admin-dashboard/maincontent/inventory/addinventory/addinventory.component';
import { UpdateinventoryComponent } from './admin-dashboard/maincontent/inventory/updateinventory/updateinventory.component';
import { StatusinventComponent } from './admin-dashboard/maincontent/inventory/statusinvent/statusinvent.component';
import { ManageshopsComponent } from './admin-dashboard/maincontent/manageshops/manageshops.component';
import { SalesComponent } from './admin-dashboard/maincontent/sales/sales.component';
import { ProfileComponent } from './admin-dashboard/maincontent/profile/profile.component';
import { ManageusersComponent } from './admin-dashboard/maincontent/manageusers/manageusers.component';
import { OrdersComponent } from './admin-dashboard/maincontent/orders/orders.component';

const routes:Routes=[
    {
        path: 'admin', component: AdminDashboardComponent,canActivate:[AuthGuard],
        children: [
          { path: '', component: DashboardComponent, pathMatch: 'full'},
          {
            path: 'feedback', component: FeedbackComponent,canActivate:[AuthGuard]
          },
          {
            path: 'dashboard', component: DashboardComponent,
          },
          {
            path: 'Inventory',
             component: InventoryComponent,
            children:[
             {
              path: 'dashboard', // child route path
              component: DashboardComponent // child route component that the router renders
             },
             {
              path: 'engagement', // child route path
              component: EngagementComponent // child route component that the router renders
             },
             {
              path: 'addproduct', // child route path
              component: AddinventoryComponent // child route component that the router renders
             },
             {
              path: 'updateinventory', // child route path
              component: UpdateinventoryComponent // child route component that the router renders
             },
             {
              path: 'statusinventory', // child route path
              component: StatusinventComponent // child route component that the router renders
             },
            ],
      
      
          },
          {
            path: 'manageshops', component: ManageshopsComponent,
          },
          {
            path: 'sales', component: SalesComponent,
          },
          {
            path: 'profile', component: ProfileComponent,
          },
          {
            path: 'manageusers', component: ManageusersComponent,
          },
          {
            path: 'orderDetails', component: OrdersComponent,
          },
      ]
      }
]






@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
    })
export class AdminRouter{

}
