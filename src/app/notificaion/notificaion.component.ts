import { Component, OnInit } from '@angular/core';
import{CommunicationService} from '../communication.service';

@Component({
  selector: 'app-notificaion',
  templateUrl: './notificaion.component.html',
  styleUrls: ['./notificaion.component.css']
})
export class NotificaionComponent implements OnInit {
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
