import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent implements OnInit {
  activeUserRole;
  constructor() { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

}
