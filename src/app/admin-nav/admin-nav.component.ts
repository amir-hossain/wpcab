import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
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
    },
    {
      label:"Create notification",
      link:"/create-notification"
    },
    {
      label:"Request",
      link:"/request"
    },
    {
      label:"Approve",
      link:"/approve"
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
