import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup} from "@angular/forms"
@Component({
  selector: 'app-register-nav',
  templateUrl: './register-nav.component.html',
  styleUrls: ['./register-nav.component.css']
})
export class RegisterNavComponent implements OnInit {
  searchForm:FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.searchForm=this.builder.group({
      name:[""],
      area:[""],
      fatherName:[""]
    })
  }

  search(){
    console.log(this.searchForm.value);
  }

}
