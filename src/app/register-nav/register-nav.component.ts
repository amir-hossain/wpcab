import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'app-register-nav',
  templateUrl: './register-nav.component.html',
  styleUrls: ['./register-nav.component.css']
})
export class RegisterNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  changeTab(e){
    console.log(e.tab);
 
    switch(e.index){
      case 0:
        this.router.navigateByUrl("/register/home");
      break;
      case 1:
        this.router.navigateByUrl("/register/profile");
      break;
      case 2:
      this.router.navigateByUrl("/register/registration");
      break;
      case 3:
      this.router.navigateByUrl("/register/finance");
      break;
      case 4:
      this.router.navigateByUrl("/register/notification");
      break;
      case 5:
      this.router.navigateByUrl("/register/collect");
      break;
      case 6:
      this.router.navigateByUrl("/login");
      break;
    }
  }

  logout(){
    this.router.navigateByUrl("/login")
  }


}
