import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  totalPayment = 1;
  total;
  userInfo;
  address;
  auth;
  activeUserRole;
  selectedItemId;
  path;
  @Input() profile: boolean;
  constructor(private loc: Location, public dialog: MatDialog, private router: Router, private communicationService: CommunicationService,
     private ts: TranslateService) {
    let lan = localStorage.getItem('lan');
    this.ts.use(lan);
  }

  notifyRoot() {
    if (this.profile) {
      CommunicationService.navBar = true;
      this.communicationService.emitChange();
    } else {
      CommunicationService.navBar = false;
      this.communicationService.emitChange();
    }

  }

  ngOnInit() {

    this.notifyRoot();
    this.path = this.router.url;
    console.log(this.path);
    this.activeUserRole = localStorage.getItem('activeUserRole');
    if (this.path === '/profile') {
      this.selectedItemId = localStorage.getItem('activeUserId');
    } else {
      this.selectedItemId = localStorage.getItem('key');
    }

  }

  back() {
    this.loc.back();
  }

  delete() {
    // console.log(this.total)
    let dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      data: { name: this.userInfo.fullName, key: this.selectedItemId, total: this.total }
    });

  }
}
