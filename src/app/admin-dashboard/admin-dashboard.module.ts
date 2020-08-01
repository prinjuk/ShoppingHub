import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { adminRoutingModule } from './app-admin-router';
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
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProfileComponent } from './admin-dashboard/maincontent/profile/profile.component';
import { SalesComponent } from './admin-dashboard/maincontent/sales/sales.component';
import { EngagementComponent } from './admin-dashboard/maincontent/inventory/engagement/engagement.component';
import { StatusinventComponent } from './admin-dashboard/maincontent/inventory/statusinvent/statusinvent.component';
import { UpdateinventoryComponent } from './admin-dashboard/maincontent/inventory/updateinventory/updateinventory.component';
import { AddinventoryComponent } from './admin-dashboard/maincontent/inventory/addinventory/addinventory.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { DialogEditComponent } from './admin-dashboard/maincontent/inventory/updateinventory/dialog-edit/dialog-edit.component';
import { AuthGuard } from '../auth.guard';
import { ErrorInterceptor } from '../Error-interceptor';
import { AuthInterceptor } from '../auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AdminDashboardComponent, MaincontentComponent, SidebarComponent, DashboardComponent, OrdersComponent, InventoryComponent, ManageusersComponent, ManageshopsComponent, FeedbackComponent, ProfileComponent, SalesComponent, EngagementComponent, StatusinventComponent, UpdateinventoryComponent, AddinventoryComponent, DialogEditComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    FormsModule,
    BrowserModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    adminRoutingModule,
    // RouterModule.forRoot([




    //   ]),
  ],
  providers:[  AuthGuard,
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},]
})
export class AdminDashboardModule { }
