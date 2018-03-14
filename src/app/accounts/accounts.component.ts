import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  activeUserRole;
  constructor() { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

}
