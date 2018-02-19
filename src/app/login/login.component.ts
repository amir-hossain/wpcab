import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  unError="";
  passError="";
  
  constructor(private builder:FormBuilder,private router:Router,private db:AngularFireDatabase) { }

  ngOnInit() {
    this.loginForm=this.builder.group({
      userInfo:[localStorage.getItem("userInfo"),[Validators.required]],
      password:[localStorage.getItem("password"),[Validators.required]],
      remember:[""]
    })

  
  }

  auth(userInfo,password){
    this.db.database.ref('online').once('value')
    .then(snap=>{
      // console.log(snap.val());
      let data=snap.val();
      let objArry=[];
      Object.keys(data).forEach(key=>objArry.push(data[""+key]));
      this.check(userInfo,password,objArry);
    });

  }

  check(userInfo,password,objArry:any[]){
    let userInfoMatch;
    for(let obj of objArry){
      userInfoMatch=false;
      switch(userInfo){
        case obj.phone.toString():
        userInfoMatch=true;
        break;
        case obj.email:
        userInfoMatch=true;
        break;
        case obj.userName:
        userInfoMatch=true;
        break;
      }

      if(userInfoMatch){
        if(password===obj.password){
          this.router.navigateByUrl('home');
          break;
        }else{
          this.passError='Wrong password';
          break;
        }
      }
    }
    if(!userInfoMatch){
      this.unError='Wrong info';
    }
   

  }

  login(){
    this.unError="";
    this.passError="";
    if(this.loginForm.valid){
      this.auth(this.loginForm.controls.userInfo.value,this.loginForm.controls.password.value);
    }else{
      Object.keys(this.loginForm.controls).forEach(field=>{
        this.loginForm.get(field).markAsTouched({onlySelf:true})
      })
    }

 
  }

}
