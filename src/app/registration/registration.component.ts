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
      name:["",Validators.required],
      password:["",Validators.required],
      phone:["",Validators.required],
      email:["",[Validators.email]],
      role:["",Validators.required],
      area:["",Validators.required],
      district:["",Validators.required],
      upozilla:["",Validators.required],
      fatherName:["",Validators.required],
      motherName:["",Validators.required],
      permanentAddress:["",Validators.required],
      age:["",Validators.required],
      invitedBy:["",Validators.required],
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
