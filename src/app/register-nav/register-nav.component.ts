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
      label:"logo",
      link:"/home"
    },
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
    },
    {
      label:"Notification",
      link:"/notification"
    }
    
    
    
  ];
  constructor(private router:Router) { 

  }

  ngOnInit() {
  

  }

  logout(){
    localStorage.removeItem('activeUserRole');
    this.router.navigate(["login"]);
  }


}
