import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseSideComponent } from './choose-side/choose-side.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

// reitit
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'side', component: ChooseSideComponent },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
