import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from "@angular/forms";

import {AngularFireList,AngularFireDatabase} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  registrationForm:FormGroup;
  fireList :AngularFireList<{}>;
  dbRef;
  url='./assets/img/add.png';
  constructor(private builder:FormBuilder,private db:AngularFireDatabase) {
    this.dbRef=this.db.database.ref("/users");
    console.log(this.fireList);

    var starCountRef =  this.db.database.ref('/users');
starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val())
});
   }

  ngOnInit() {
    this.registrationForm=this.builder.group({
      userInfo:this.builder.group({
        photo:[""],
        fullName:["",Validators.required],
        gender:['male'],
        dob:["",Validators.required],
        fatherName:["",Validators.required],
        motherName:["",Validators.required],
        invitedBy:["",Validators.required],
        occupation:["student"],
        bloodGroup:[""],
      }),
      address:this.builder.group({
        area:["",Validators.required],
        upozilla:["",Validators.required],
        permanentAddress:["",Validators.required],
        district:["",Validators.required],
        country:[""],
        nationality:[""],
        nId:[""],
      }),
      auth:this.builder.group({
        userName:[''],
        password:["",Validators.required],
        conPassword:["",Validators.required],
        phone:["",Validators.required],
        role:["User"],
        email:[""],
      })
    })
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  

  signup(){
    if(this.registrationForm.valid){
      let temp=this.registrationForm.value;
      temp.age=(<Date>this.registrationForm.controls.age.value).toLocaleDateString();
      this.dbRef.once('value',snap=>{
      
          this.dbRef.push(temp);
          console.log(temp);
      })
      // this.registrationForm.reset();
    }else{
      Object.keys(this.registrationForm.controls).forEach(field=>{
        this.registrationForm.get(field).markAsTouched({onlySelf:true});
      })
    
    }
  
  }

}
