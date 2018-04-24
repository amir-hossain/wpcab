import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireDatabase} from 'angularfire2/database';
import {NavLinksService} from '../nav-links.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[NavLinksService]
})
export class NavComponent implements OnInit {
  routerLinks;
  lanBD=true;
  photoUrl;
  up=false;
  userRole;
  constructor(private router:Router,private db:AngularFireDatabase,private nls:NavLinksService,private ts: TranslateService) { 
    let userId=localStorage.getItem('activeUserId');
    this.db.database.ref('users/'+userId+'/userInfo/').once('value',snap=>this.photoUrl=snap.val().photo
  );
  ts.setDefaultLang('bn');
}

  ngOnInit() {
    this.userRole=localStorage.getItem('activeUserRole');
    if(this.userRole==='User'){
      this.routerLinks=this.nls.getUserLinks();
    }else if(this.userRole==='Admin'){
      this.routerLinks=this.nls.getAdminLinks();
    }else if(this.userRole==='Accountant'){
      this.routerLinks=this.nls.getAccountantLinks();
    }else{
      this.routerLinks=this.nls.getOherLinks();
    }
  }

  logout(){
    localStorage.removeItem('activeUserRole');
    this.router.navigate(["login"]);
  }

  menuClick(){
    this.up=!this.up;
  }

  translate(){
    this.lanBD=!this.lanBD;
    if(this.lanBD){
      this.ts.use('bd');
    }else{
      this.ts.use('en');
    }
    
  }

}
