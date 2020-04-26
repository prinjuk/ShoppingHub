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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToasterModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'list', component: ListPageComponent,
    },{
      path: 'home', component: HomeComponent,
    },
    {
      path: 'detailpage', component: DetailpageComponent,
    },
    {
      path: 'purchase', component:PurchaseSummaryComponent,
    },
    {
      path: 'login', component:LoginComponent,
    },
    {
      path: 'signup', component:SignupComponent,
    },
    {
      path: 'paymentsummary', component: PaymentsummaryComponent,
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
