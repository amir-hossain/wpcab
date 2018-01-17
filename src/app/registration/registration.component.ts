import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from "@angular/forms"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  registrationForm:FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.registrationForm=this.builder.group({
      name:[""],
      password:[""],
      phone:[""],
      email:[""],
      role:[""],
      area:[""],
      district:[""],
      upozilla:[""],
      fatherName:[""],
      motherName:[""],
      permanentAddress:[""],
      age:[""],
      invitedBy:[""],
      occupation:[""],
      nationality:[""],
      nationalId:[""],
      bloodGroup:[""],
      country:[""]
    })
  }

  signup(){
    console.log(this.registrationForm.value);
  }

}
