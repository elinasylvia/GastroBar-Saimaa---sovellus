import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainCourseViewComponent } from './main-course-view/main-course-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { BillingComponent } from './billing/billing.component';
import { ItemPageOneComponent } from './item-page-one/item-page-one.component';
import { ItemPageTwoComponent } from './item-page-two/item-page-two.component';
import { StaffOrdersComponent } from './staff-orders/staff-orders.component';
import { DrinksViewComponent } from './drinks-view/drinks-view.component';


// reitit
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'item/1', component: ItemPageOneComponent },
  { path: 'item/2', component: ItemPageTwoComponent },
  { path: 'staff-orders', component: StaffOrdersComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'maincourseview', component: MainCourseViewComponent },
  { path: 'categoryview', component: CategoryViewComponent },
  { path: 'drinksview', component: DrinksViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
