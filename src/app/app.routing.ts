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
const routes:Routes=[
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        children:[
            {
                path:"home",
                component:HomeComponent,

            },
            {
                path:"profile",
                component:ProfileComponent,

            },
            {
                path:"registration",
                component:RegistrationComponent,

            },
            {
                path:"finance",
                component:FinanceComponent,

            },
            {
                path:"notification",
                component:NotificaionComponent,

            },
            {
                path:"collection",
                component:CollectionComponent,

            },
            {
                path:'create-notification',
                component:CreateNotificationComponent
            },
            {
                path:'request',
                component:RequestComponent
            },
            {
                path:'approve',
                component:ApproveComponent
            }
        ]
    }
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }