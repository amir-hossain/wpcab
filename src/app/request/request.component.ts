import { Component, OnInit } from '@angular/core';
import{CommunicationService} from '../communication.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  activeUserRole
  constructor(private communicationService: CommunicationService) {
    this.notifyRoot();
   }
   notifyRoot(){
    CommunicationService.navBar=true;
    this.communicationService.emitChange();
   }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

}
