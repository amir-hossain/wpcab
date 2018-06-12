import { Component,ChangeDetectorRef} from '@angular/core';
import{CommunicationService} from './communication.service';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navBar=false;
  watcher: Subscription;
  activeMediaQuery = "";
  big=false;
  small=false;
  activeUserRole=localStorage.getItem('activeUserRole');
  constructor(private communicationService: CommunicationService,private changeDetector: ChangeDetectorRef,media: ObservableMedia) {
    communicationService.changeEmitted$.subscribe(data => {
      // console.log(data);
      if(data){
        this.navBar=true;
      }else{
        this.navBar=false;
      }
      // to manually notify paraent 
      changeDetector.detectChanges();
    });

    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === "sm" || change.mqAlias === "xs") {
         this.big=false;
         this.small=true;
        //  console.log("small");
      }else{
        this.big=true;
         this.small=false;
        // console.log("big");
      }
    });
  }
}
