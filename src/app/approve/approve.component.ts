import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
  activeUserRole
  constructor() { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

}
