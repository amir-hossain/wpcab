import { Component, OnInit,HostListener,ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireDatabase} from 'angularfire2/database';
import {NavLinksService} from '../nav-links.service';
import { TranslateService } from '@ngx-translate/core';
import{CommunicationService} from '../communication.service';
import {DropDownItemsService} from '../drop-down-items.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[NavLinksService,DropDownItemsService]
})
export class NavComponent implements OnInit {
  defaultLan;
  lanList;
  routerLinks;
  lanBD=true;
  photoUrl;
  userRole;
  constructor(private router:Router,private db:AngularFireDatabase,private nls:NavLinksService,private ts: TranslateService,private communicationService: CommunicationService,private eRef: ElementRef,private dds:DropDownItemsService) { 
    let userId=localStorage.getItem('activeUserId');
    this.db.database.ref('users/'+userId+'/userInfo/').once('value',snap=>this.photoUrl=snap.val().photo
  );
}

  ngOnInit() {
    this.lanList=this.dds.getLanguage();
    let lan=localStorage.getItem('lan');
    if(lan==='bn'){
      // this.lan='বাংলা';
      this.lanBD=true;
      this.defaultLan="বাংলা"
      // console.log(lan);
    this.ts.use(lan);
    }else{
      // this.lan='English';
      this.lanBD=false;
      this.defaultLan="English"
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



  logout(){
    // notifiy app component by communication service
    CommunicationService.navBar=false;
    this.communicationService.emitChange();
    localStorage.removeItem('activeUserRole');
    this.router.navigate(["/login"]);
  }



  dropdown(val){
    // console.log(val);
    if(val==='English'){
      this.ts.use('en');
      localStorage.setItem('lan','en');
    }else{
      this.ts.use('bn');
      localStorage.setItem('lan','bn');
    }
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
