import { Component, OnInit } from '@angular/core';
import{CommunicationService} from '../communication.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  activeUserRole;
  constructor(private communicationService: CommunicationService) { 
    this.notifyRoot();
  }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

  notifyRoot(){
    CommunicationService.navBar=true;
    this.communicationService.emitChange();
   }

}
