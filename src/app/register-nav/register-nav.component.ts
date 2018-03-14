import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'app-register-nav',
  templateUrl: './register-nav.component.html',
  styleUrls: ['./register-nav.component.css']
})
export class RegisterNavComponent implements OnInit {
  routerLinks=[
    {
      label:"Home",
      link:"/home"
    },
    {
      label:"Profile",
      link:"/profile"
    },
    {
      label:"Registration",
      link:"/registration"
    },
    {
      label:"Finance",
      link:"/finance"
    },
    {
      label:"Collection",
      link:"/collection"
    }
    {
      label:"Notification",
      link:"/notification"
    }
    
    
    
  ];
  constructor(private router:Router) { 

  }

  ngOnInit() {
  

  }

  // changeTab(e){
  //   console.log(e.tab);
 
  //   switch(e.index){
  //     case 0:
  //       this.router.navigateByUrl("/home");
  //     break;
  //     case 1:
  //       this.router.navigateByUrl("/profile");
  //     break;
  //     case 2:
  //     this.router.navigateByUrl("/registration");
  //     break;
  //     case 3:
  //     this.router.navigateByUrl("/finance");
  //     break;
  //     case 4:
  //     this.router.navigateByUrl("/notification");
  //     break;
  //     case 5:
  //     this.router.navigateByUrl("/collect");
  //     break;
  //     case 6:
  //     this.router.navigateByUrl("/login");
  //     break;
  //   }
  // }

  logout(){
    this.router.navigate(["login"]);
  }


}
