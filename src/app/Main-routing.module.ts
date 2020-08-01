import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { PurchaseSummaryComponent } from './purchase-summary/purchase-summary.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentsummaryComponent } from './paymentsummary/paymentsummary.component';

const routes:Routes=[
    {path: '',
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
    }
]
@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class MainRoutingModule{

}