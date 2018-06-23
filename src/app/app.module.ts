import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotificaionComponent } from './notificaion/notificaion.component';
import { FinanceComponent } from './finance/finance.component';
import { Meterial } from './meterial'
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { CollectionComponent } from './collection/collection.component';
import { NavComponent } from './nav/nav.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { RequestComponent } from './request/request.component';
import { ApproveComponent } from './approve/approve.component';
import { SucessPageComponent } from './sucess-page/sucess-page.component';
import { DetailsComponent } from './details/details.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginGuard } from './login.guard';
import { AntiUserGuard } from './anti-user.guard';
import { AccountantGuard } from './accountant.guard';
import { AdminGuard } from './admin.guard';
import { AdcountGuard } from './adcount.guard';
import { AntiUtorGuard } from './anti-utor.guard';
import { EditComponent } from './edit/edit.component';
import { DialogComponent } from './details/dialog.component';
import { IgxRippleModule } from 'igniteui-angular/main';
import { FooterComponent } from './footer/footer.component';
import { CommunicationService } from './communication.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConnectorService } from './connector.service';
import {DataService} from './data.service';


const confiq = {
  apiKey: "AIzaSyAgWD72SmEEKlxHoKW1ZcsoR5qo583LM78",
  authDomain: "wpcab-96299.firebaseapp.com",
  databaseURL: "https://wpcab-96299.firebaseio.com",
  projectId: "wpcab-96299",
  storageBucket: "wpcab-96299.appspot.com",
  messagingSenderId: "967144772560"
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RegistrationComponent,
    NotificaionComponent,
    FinanceComponent,
    CollectionComponent,
    NavComponent,
    CreateNotificationComponent,
    RequestComponent,
    ApproveComponent,
    SucessPageComponent,
    DetailsComponent,
    AccountsComponent,
    EditComponent,
    DialogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    BrowserAnimationsModule,
    IgxRippleModule,
    Meterial,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(confiq),
    AngularFireDatabaseModule
  ],
  entryComponents: [DialogComponent],
  providers: [AngularFireAuth, LoginGuard, AntiUserGuard, AccountantGuard, AdminGuard, AdcountGuard, AntiUtorGuard, CommunicationService, ConnectorService,DataService],
  bootstrap: [NavComponent]
})
export class AppModule { }
