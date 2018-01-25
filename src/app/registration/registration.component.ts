import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from "@angular/forms";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  registrationForm:FormGroup;
  constructor(private builder:FormBuilder,private db:AngularFireDatabase) { }

  ngOnInit() {
    this.registrationForm=this.builder.group({
      name:["",Validators.required],
      password:["",Validators.required],
      phone:["",Validators.required],
      role:["",Validators.required],
      area:["",Validators.required],
      district:["",Validators.required],
      upozilla:["",Validators.required],
      fatherName:["",Validators.required],
      motherName:["",Validators.required],
      permanentAddress:["",Validators.required],
      age:["",Validators.required],
      invitedBy:["",Validators.required],
      email:["",[Validators.email]],
      occupation:[""],
      nationality:[""],
      nationalId:[""],
      bloodGroup:[""],
      country:[""]
    })
  }

  signup(){
    if(this.registrationForm.valid){
      this.db.list("wpcab-96299").push(this.registrationForm.value);
      console.log(this.registrationForm.value);
    }else{
      Object.keys(this.registrationForm.controls).forEach(field=>{
        this.registrationForm.get(field).markAsTouched({onlySelf:true});
      })
    }
  
  }

}
