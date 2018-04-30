import { Component,ChangeDetectorRef} from '@angular/core';
import{CommunicationService} from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navBar=false;
  activeUserRole=localStorage.getItem('activeUserRole');
  constructor(private communicationService: CommunicationService,private changeDetector: ChangeDetectorRef) {
    communicationService.changeEmitted$.subscribe(data => {
      // console.log(data);
      if(data){
        this.navBar=true;
      }else{
        this.navBar=false;
      }
      // to manually notify paraent 
      changeDetector.detectChanges();
    })
  }
}
