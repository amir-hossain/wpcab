import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountant-nav',
  templateUrl: './accountant-nav.component.html',
  styleUrls: ['./accountant-nav.component.css']
})
export class AccountantNavComponent implements OnInit {
  routerLinks=[
    {
      label:"logo",
      link:"/home"
    },
    {
      label:'Home',
      link:'/home'
    },{
      label:'Profile',
      link:'/profile'
    },
    {
      label:'Registeration',
      link:'/registration'
    },
    {
      label:'Finance',
      link:'/finance'
    },
    {
      label:'Collection',
      link:'/collection'
    },
    {
      label:'Notification',
      link:'/notification'
    },
    {
      label:'Create Notification',
      link:'/create-notification'
    },
    {
      label:'Accounts',
      link:'/accounts'
    },
    {
      label:'Approve',
      link:'/approve'
    }
  ]
  constructor(private router:Router) { }
  activeUserRole;
  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

  logout(){
    localStorage.removeItem('activeUserRole');
    this.router.navigateByUrl('login');
  }
}
