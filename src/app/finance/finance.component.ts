import { Component, OnInit } from '@angular/core';
import{CommunicationService} from '../communication.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
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
