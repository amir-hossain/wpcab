import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CommunicationService} from '../communication.service';

@Component({
  selector: 'app-sucess-page',
  templateUrl: './sucess-page.component.html',
  styleUrls: ['./sucess-page.component.css']
})
export class SucessPageComponent implements OnInit {
  path;
  constructor(private router: Router,private communicationService: CommunicationService) {
    this.notifyRoot();
    this.path = this.router.url;
    console.log(this.path);
  }
  notifyRoot(){
    CommunicationService.navBar=false;
    this.communicationService.emitChange();
   }

  ngOnInit() {
  }

}
