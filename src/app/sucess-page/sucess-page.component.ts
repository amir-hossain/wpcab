import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess-page',
  templateUrl: './sucess-page.component.html',
  styleUrls: ['./sucess-page.component.css']
})
export class SucessPageComponent implements OnInit {
  path;
  constructor(private router: Router) {
    this.path = this.router.url;
    console.log(this.path);
  }

  ngOnInit() {
  }

}
