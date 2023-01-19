import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainCourseViewComponent } from './main-course-view/main-course-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';

// reitit
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'maincourseview', component: MainCourseViewComponent },
  { path: 'categoryview', component: CategoryViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
