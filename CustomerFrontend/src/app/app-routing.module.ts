import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { ItemPageOneComponent } from './item-page-one/item-page-one.component';
import { ItemPageTwoComponent } from './item-page-two/item-page-two.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StaffOrdersComponent } from './staff-orders/staff-orders.component';
import { TestiComponent } from './testi/testi.component';
import { WelcomeComponent } from './welcome/welcome.component';

// reitit
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'testi', component: TestiComponent },
  { path: 'item/1', component: ItemPageOneComponent },
  { path: 'item/2', component: ItemPageTwoComponent },
  { path: 'staff-orders', component: StaffOrdersComponent },
  { path: 'billing', component: BillingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
