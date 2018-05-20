import { Component, OnInit,HostListener,ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireDatabase} from 'angularfire2/database';
import {NavLinksService} from '../nav-links.service';
import { TranslateService } from '@ngx-translate/core';
import{CommunicationService} from '../communication.service';
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
  constructor(private router:Router,private db:AngularFireDatabase,private nls:NavLinksService,private ts: TranslateService,private communicationService: CommunicationService,private eRef: ElementRef) { 
    let userId=localStorage.getItem('activeUserId');
    this.db.database.ref('users/'+userId+'/userInfo/').once('value',snap=>this.photoUrl=snap.val().photo
  );
}

  ngOnInit() {
    let lan=localStorage.getItem('lan');
    if(lan==='bn'){
      this.lanBD=true;
      // console.log(lan);
    this.ts.use(lan);
    }else{
      this.lanBD=false;
    }
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

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      // console.log("clicked outside");
      this.up=false;
    }
  }

  logout(){
    // notifiy app component by communication service
    CommunicationService.navBar=false;
    this.communicationService.emitChange();
    localStorage.removeItem('activeUserRole');
    this.router.navigate(["/login"]);
  }

  menuClick(){
    this.up=!this.up;
  }

  translate(){
    
    if(!this.lanBD){
      this.ts.use('bn');
      localStorage.setItem('lan','bn');
      this.lanBD=true;
    }else{
      this.ts.use('en');
      localStorage.setItem('lan','en');
      this.lanBD=false;
    }
  }
}
