import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private builder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm=this.builder.group({
      phone_email:[localStorage.getItem("email_phone"),[Validators.email]],
      password:[localStorage.getItem("password"),[Validators.required]],
      remember:[""]
    })
  }

  login(){
    // console.log(this.loginForm.value);
    if(this.loginForm.controls.phone_email.value==="abc@gmail.com" && this.loginForm.controls.password.value==="abc"){
      if(this.loginForm.controls.remember.value){
        localStorage.setItem("email_phone",this.loginForm.controls.phone_email.value);
        localStorage.setItem("password",this.loginForm.controls.password.value);
      }
      this.router.navigate(["register/home"]);
    }
  }

}
