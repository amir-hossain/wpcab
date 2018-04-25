import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{CommunicationService} from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  path;
  logedIn=false;
  activeUserRole=localStorage.getItem('activeUserRole');
  constructor(private router: Router,private communicationService: CommunicationService) {
    this.path = this.router.url;
    console.log(this.path);
    communicationService.changeEmitted$.subscribe(data => {
      // console.log(data);
      if(data){
        this.logedIn=true;
      }else{
        this.logedIn=false;
      }
    })
  }
}
