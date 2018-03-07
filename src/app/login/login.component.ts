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
  serverError='';

  get userInfo() { return this.loginForm.get('userInfo'); }

  get password() { return this.loginForm.get('password'); }
  
  constructor(private builder:FormBuilder,private router:Router,private db:AngularFireDatabase) { }

  ngOnInit() {
    this.loginForm=this.builder.group({
      userInfo:[localStorage.getItem("userInfo"),[Validators.required]],
      password:[localStorage.getItem("password"),[Validators.required]],
      remember:[""]
    })

  
  }

  auth(userInfo,password){
    this.db.database.ref('auth').once('value')
    .then(snap=>{
      console.log(snap.val());
      let data=snap.val();
      if(data){
        let objArry=[];
      Object.keys(data).forEach(key=>objArry.push(data[""+key]));
      this.check(userInfo,password,objArry);
      }else{
        this.serverError='Internal problem';
      }
      
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
          if(this.loginForm.controls.remember.value){
            localStorage.setItem('userInfo',userInfo);
            localStorage.setItem('password',password);
          }
          localStorage.setItem('activeUserRole',obj.role);
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
      this.auth(this.userInfo.value,this.password.value);
    }else{
      Object.keys(this.loginForm.controls).forEach(field=>{
        this.loginForm.get(field).markAsTouched({onlySelf:true})
      })
    }

 
  }

}
