import {NgModule} from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {FinanceComponent} from "./finance/finance.component";
import {NotificaionComponent} from './notificaion/notificaion.component';
import {CollectComponent} from "./collect/collect.component"
const routes:Routes=[
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"register",
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
                path:"collect",
                component:CollectComponent,

            }
        ]
    }
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }