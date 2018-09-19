import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {DropDownItemsService} from '../drop-down-items.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[DropDownItemsService]
})

export class LoginComponent implements OnInit {
  lanList;
  lan='bn';
  loginForm:FormGroup;
  unError=false;
  passError=false;
  serverError=false;

  get userInfo() { return this.loginForm.get('userInfo'); }

  get password() { return this.loginForm.get('password'); }
  
  constructor(private builder:FormBuilder,private router:Router,private db:AngularFireDatabase,private ts: TranslateService,private dds:DropDownItemsService) { 
    ts.setDefaultLang('bn');
  }

  ngOnInit() {
    this.lanList=this.dds.getLanguage();
    this.initilizeTranslator();
    this.initilizeForm();
  }

  initilizeForm(){
    let defaultLan;
    if(this.lan==='bn'){
      defaultLan="বাংলা";
    }else{
      defaultLan="English";
    }
    this.loginForm=this.builder.group({
      userInfo:[localStorage.getItem("userInfo"),[Validators.required]],
      password:[localStorage.getItem("password"),[Validators.required]],
      remember:[""],
      language:defaultLan
    })
  }
  initilizeTranslator(){
    this.lan=localStorage.getItem('lan');
    if(this.lan){
      this.ts.use(this.lan);
    }else{
      this.ts.setDefaultLang('bn');
      localStorage.setItem('lan','bn');
    }
  }

  auth(userInfo,password){
    // this.db.database.ref('auth').once('value')
    // .then(snap=>{
    //   // console.log(snap.val());
    //   let data=snap.val();
    //   if(data){
    //     let objArry=[];
    //     let temp;
    //   Object.keys(data).forEach((key)=>{
    //     temp=data[key];
    //     temp.id=key;
    //     objArry.push(temp);
    //   });
    //   this.check(userInfo,password,objArry);
    //   }else{
    //     this.serverError=true;
    //   }
      
    // });

    if(userInfo==="admin" && password==="admin"){

      localStorage.setItem('activeUserRole',"Admin");
      localStorage.setItem('activeUserId',"4");

      this.router.navigateByUrl('home');

    }

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
          localStorage.setItem('activeUserId',obj.id);
          // notifiy app component by communication service
          this.router.navigateByUrl('home');
          break;
        }else{
          this.passError=true;
          break;
        }
      }
    }
    if(!userInfoMatch){
      this.unError=true;
    }
   

  }



  dropdown(val){
    // console.log(val);
    if(val==='English'){
      this.ts.use('en');
      this.lan='en';
      localStorage.setItem('lan','en');
    }else{
      this.ts.use('bn');
      this.lan='bn';
      localStorage.setItem('lan','bn');
    }
  }


  login(){
    this.unError=false;
    this.passError=false;
    this.serverError=false;
    if(this.loginForm.valid){
      this.auth(this.userInfo.value,this.password.value);
    }else{
      Object.keys(this.loginForm.controls).forEach(field=>{
        this.loginForm.get(field).markAsTouched({onlySelf:true})
      })
    }

 
  }

}
