import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirestoreModule } from '@angular/fire/firestore';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { environment } from 'src/environments/environment';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MainCourseViewComponent } from './main-course-view/main-course-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ShoppingCartComponent,
    MainCourseViewComponent,
    CategoryViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase') as
    ModuleWithProviders<AngularFireModule>,
    FirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
