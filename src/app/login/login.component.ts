import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';


const USER_NAME_ERROR_CODE="auth/user-not-found";
const PASSWORD_ERROR_CODE="auth/wrong-password";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  unError="";
  passError="";
  constructor(private builder:FormBuilder,private router:Router,private auth:AngularFireAuth) { }

  ngOnInit() {
    this.loginForm=this.builder.group({
      phone_email:[localStorage.getItem("email_phone"),[Validators.email]],
      password:[localStorage.getItem("password"),[Validators.required]],
      remember:[""]
    })
  }

  login(){
    this.unError="";
    this.passError="";
    if(this.loginForm.valid){
      this.auth.auth.signInWithEmailAndPassword(this.loginForm.controls.phone_email.value,this.loginForm.controls.password.value)
      .then(()=>{
          if(this.loginForm.controls.remember.value){
          localStorage.setItem("email_phone",this.loginForm.controls.phone_email.value);
          localStorage.setItem("password",this.loginForm.controls.password.value);
        }
        this.router.navigate(["register/home"]);
      })
      .catch(error=>{
        console.log(error.code);
        if(error.code===USER_NAME_ERROR_CODE){
          console.log(error.code);
          this.unError="Email or number is worng";
        }else if(error.code===PASSWORD_ERROR_CODE){
          this.passError="Password is wrong";
        }
      });
    }else{
      Object.keys(this.loginForm.controls).forEach(field=>{
        this.loginForm.get(field).markAsTouched({onlySelf:true})
      })
    }

 
  }

}
