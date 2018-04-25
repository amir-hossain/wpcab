import {NgModule} from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {FinanceComponent} from "./finance/finance.component";
import {NotificaionComponent} from './notificaion/notificaion.component';
import {CollectionComponent} from "./collection/collection.component";
import {CreateNotificationComponent} from './create-notification/create-notification.component';
import {RequestComponent} from './request/request.component';
import {ApproveComponent} from './approve/approve.component';
import {SucessPageComponent} from './sucess-page/sucess-page.component';
import{DetailsComponent} from './details/details.component';
import{AccountsComponent} from './accounts/accounts.component';
import {LoginGuard} from './login.guard';
import {AntiUserGuard} from './anti-user.guard';
import {AccountantGuard} from './accountant.guard';
import {AdminGuard} from './admin.guard';
import {AdcountGuard} from './adcount.guard';
import {AntiUtorGuard} from './anti-utor.guard';
import {EditComponent} from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
const routes:Routes=[
 
    {
        path:'',
        canActivate:[LoginGuard],
        children:[
            {
                path:"home",
                component:HomeComponent
            },
            {
                path:"profile",
                component:ProfileComponent
        
            },
            {
                path:"finance",
                component:FinanceComponent
            },
            {
                path:"notification",
                component:NotificaionComponent
            },
            {
                path:'edit',
                component:EditComponent
            },
            {
                path:"registration",
                canActivate:[AntiUserGuard],
                component:RegistrationComponent,
            },
            {
                path:"collection",
                canActivate:[AntiUserGuard],
                component:CollectionComponent,
            },
            {
                path:'create-notification',
                canActivate:[AntiUtorGuard],
                component:CreateNotificationComponent
            },
            {
                path:'request',
                canActivate:[AdminGuard],
                component:RequestComponent
            },
            {
                path:'approve',
                canActivate:[AdcountGuard],
                component:ApproveComponent
            },
            {
                path:'registration-sucessfull',
                canActivate:[AntiUserGuard],
                component:SucessPageComponent
            },
            {
                path:'delete-sucessfull',
                canActivate:[AntiUserGuard],
                component:SucessPageComponent
            },
            {
                path:'details',
                canActivate:[AntiUserGuard],
                component:DetailsComponent
            },
            {
                path:'accounts',
                canActivate:[AccountantGuard],
                component:AccountsComponent
            },
        ]
    },
    {
        path:"footer",
        component:FooterComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:'**',
        redirectTo:'login'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }