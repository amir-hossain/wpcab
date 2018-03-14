import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { RegisterNavComponent } from './register-nav/register-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotificaionComponent } from './notificaion/notificaion.component';
import { FinanceComponent } from './finance/finance.component';
import {Meterial} from './meterial'
import {AngularFireModule} from "angularfire2";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabaseModule } from "angularfire2/database";
import { CollectionComponent } from './collection/collection.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { RequestComponent } from './request/request.component';
import { ApproveComponent } from './approve/approve.component';
import { SucessPageComponent } from './sucess-page/sucess-page.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { SuleNavComponent } from './sule-nav/sule-nav.component';
import { AccountantNavComponent } from './accountant-nav/accountant-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AccountsComponent } from './accounts/accounts.component';



const confiq={
  apiKey: "AIzaSyAgWD72SmEEKlxHoKW1ZcsoR5qo583LM78",
  authDomain: "wpcab-96299.firebaseapp.com",
  databaseURL: "https://wpcab-96299.firebaseio.com",
  projectId: "wpcab-96299",
  storageBucket: "wpcab-96299.appspot.com",
  messagingSenderId: "967144772560"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterNavComponent,
    ProfileComponent,
    RegistrationComponent,
    NotificaionComponent,
    FinanceComponent,
    CollectionComponent,
    AdminComponent,
    AdminNavComponent,
    CreateNotificationComponent,
    RequestComponent,
    ApproveComponent,
    SucessPageComponent,
    AdminDetailsComponent,
    SuleNavComponent,
    AccountantNavComponent,
    UserNavComponent,
    AccountsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Meterial,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(confiq),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
