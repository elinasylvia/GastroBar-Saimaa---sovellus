import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirestoreModule } from '@angular/fire/firestore';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { environment } from 'src/environments/environment';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TestiComponent } from './testi/testi.component';
import { ItemPageOneComponent } from './item-page-one/item-page-one.component';
import { StaffOrdersComponent } from './staff-orders/staff-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ShoppingCartComponent,
    TestiComponent,
    ItemPageOneComponent,
    StaffOrdersComponent,
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
    HttpClientModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
