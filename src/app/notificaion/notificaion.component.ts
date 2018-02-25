import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaion',
  templateUrl: './notificaion.component.html',
  styleUrls: ['./notificaion.component.css']
})
export class NotificaionComponent implements OnInit {
  activeUserRole;

  constructor() { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

}
