import { Component, OnInit } from '@angular/core';
import{CommunicationService} from '../communication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
