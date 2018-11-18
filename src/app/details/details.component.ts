import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';
import { TranslateService } from '@ngx-translate/core';
import { LinkService } from '../link/link.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  totalPayment = 1;
  total;
  user;
  activeUserRole;
  userId;
  path;
  @Input() profile: boolean;
  constructor(private loc: Location, public dialog: MatDialog, private router: Router, private communicationService: CommunicationService,
    private ts: TranslateService, private LinkService: LinkService) {
    this.loadLanguage();
  }

  private loadLanguage() {
    let lan = localStorage.getItem('lan');
    this.ts.use(lan);
  }

  setNavBarVisibility() {
    if (this.profile) {
      CommunicationService.navBar = true;
      this.communicationService.emitChange();
    } else {
      CommunicationService.navBar = false;
      this.communicationService.emitChange();
    }

  }

  ngOnInit() {

    this.setNavBarVisibility();
    this.path = this.router.url;
    console.log(this.path);
    this.activeUserRole = localStorage.getItem('activeUserRole');
    this.userId=this.getUserId();
    // console.log(this.selectedItemId);
    this.LinkService.getUserById(this.userId).subscribe(user => this.user = user);


  }

  private getUserId() {
    if (this.path === '/profile') {
      return localStorage.getItem('activeUserId');
    }
    else {
      return localStorage.getItem('key');
    }
  }

  back() {
    this.loc.back();
  }

  delete() {
    // console.log(this.total)
    let dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      // data: { name: this.userInfo.fullName, key: this.userId, total: this.total }
    });

  }
}
