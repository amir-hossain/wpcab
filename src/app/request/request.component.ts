import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  activeUserRole
  constructor() { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
  }

}
