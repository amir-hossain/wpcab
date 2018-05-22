import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup} from "@angular/forms";
import{CommunicationService} from '../communication.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm:FormGroup;
  activeUserRole;
  constructor(private builder:FormBuilder,private communicationService: CommunicationService,private ts: TranslateService) { 
    this.notifyRoot();
    let lan=localStorage.getItem('lan');
    this.ts.use(lan);
  }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

  notifyRoot(){
    CommunicationService.navBar=true;
    this.communicationService.emitChange();
   }

}
