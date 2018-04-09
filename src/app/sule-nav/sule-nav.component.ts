import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sule-nav',
  templateUrl: './sule-nav.component.html',
  styleUrls: ['./sule-nav.component.css']
})
export class SuleNavComponent implements OnInit {
  routerLinks=[
    {
      label:"logo",
      link:"/home"
    },
    {
      label:'Home',
      link:'/home'
    },
    {
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
      label:"Collection",
      link:"/collection"
    },
    {
      label:'Notification',
      link:'/notification'
    },
    {
      label:'Create notification',
      link:'/create-notification'
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('activeUserRole');
    this.router.navigateByUrl('login');
  }

}
