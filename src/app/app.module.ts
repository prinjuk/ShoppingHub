import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListData } from './models/listData.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

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
import { MasterComponent } from './master/master.component';
import { ShopDashboardModule } from './shop-dashboard/shop-dashboard.module';
import { SharedComponentsModule } from './sharedView/shared-components/shared-components.module';
import { DatatableServiceStore } from './sharedView/shared-components/datatable.service';
import { DialogComponent } from './sharedView/dialog/dialog/dialog.component';

import { HttpClientModule } from '@angular/common/http';
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
    DialogComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSelectModule,
    SharedComponentsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    // ListData,
    MatTableModule,
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




    ]),
    ShopDashboardModule,
    AdminDashboardModule,
    NgMatSearchBarModule,
    AppRoutingModule,
    NliSearchBarModule,
    BrowserAnimationsModule
  ],
  providers: [DatatableServiceStore,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
