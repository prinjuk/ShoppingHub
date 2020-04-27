import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NliSearchBarModule } from '@next-level-integration/search-bar';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { CartfooterComponent } from './cartfooter/cartfooter.component';
import { PurchaseSummaryComponent } from './purchase-summary/purchase-summary.component';
import { PaymentsummaryComponent } from './paymentsummary/paymentsummary.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { MasterComponent } from './master/master.component';
import { DashboardComponent } from './admin-dashboard/admin-dashboard/maincontent/dashboard/dashboard.component';
import { FeedbackComponent } from './admin-dashboard/admin-dashboard/maincontent/feedback/feedback.component';
import { InventoryComponent } from './admin-dashboard/admin-dashboard/maincontent/Inventory/Inventory.component';
import { OrdersComponent } from './admin-dashboard/admin-dashboard/maincontent/orders/orders.component';

import { ManageshopsComponent } from './admin-dashboard/admin-dashboard/maincontent/manageshops/manageshops.component';
import { ManageusersComponent } from './admin-dashboard/admin-dashboard/maincontent/manageusers/manageusers.component';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { ShopFeedbackComponent } from './shop-dashboard/maincontent/shop-feedback/shop-feedback.component';
import { ShopinventoryComponent } from './shop-dashboard/maincontent/shopinventory/shopinventory.component';
import { ShopManageOrdersComponent } from './shop-dashboard/maincontent/shop-manage-orders/shop-manage-orders.component';
import { ShopManageOrdersTrackComponent } from './shop-dashboard/maincontent/shop-manage-orders-track/shop-manage-orders-track.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListPageComponent,
    DetailpageComponent,
    CartfooterComponent,
    PurchaseSummaryComponent,
    PaymentsummaryComponent,
    LoginComponent,
    SignupComponent,
    MasterComponent,
    DashboardComponent,
    FeedbackComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdminDashboardModule,
    FormsModule,
    ToasterModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: MasterComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          {
            path: 'list', component: ListPageComponent,
          },


          {
            path: 'detailpage', component: DetailpageComponent,
          },
          {
            path: 'purchase', component: PurchaseSummaryComponent,
          },
          {
            path: 'login', component: LoginComponent,
          },
          {
            path: 'signup', component: SignupComponent,
          },
          {
            path: 'paymentsummary', component: PaymentsummaryComponent,
          },
        ]
    },

    {
      path: 'admin', component: AdminDashboardComponent,
      children: [
        { path: '', component: DashboardComponent, pathMatch: 'full'},
        {
          path: 'feedback', component: FeedbackComponent,
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
    {
      path: 'shop', component: ShopDashboardComponent,
      children: [
        { path: '', component: ShopDashboardComponent, pathMatch: 'full'},
        {
          path: 'feedback', component: ShopFeedbackComponent,
        },
        {
          path: 'Inventory', component: ShopinventoryComponent,
        },
        {
          path: 'orders', component: ShopManageOrdersComponent,
        },
        {
          path: 'ordertracking', component: ShopManageOrdersTrackComponent,
        },

    ]
    },

    ]),

    NgMatSearchBarModule,
    AppRoutingModule,
    NliSearchBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
