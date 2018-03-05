import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder,AbstractControl,ValidationErrors} from "@angular/forms";
import{MatSnackBar} from '@angular/material';
import {AngularFireDatabase} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import{map} from 'rxjs/operators/map';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import {DropDownItemsService} from '../drop-down-items.service';
import { SOURCE } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DropDownItemsService]
})
export class RegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  activeUserRole
  registrationForm:FormGroup;
  filteredNames=[];
  userInfoRef;
  addressRef;
  authRef;
  storageRef;
  names=[];
  url='./assets/img/add.png';
  photo;
  roles;
  districts=[];
  filteredDistricts=[];
  subDistricts=[];
  filteredSubDistrict=[];
  registrationComplete=false;

  constructor(private builder:FormBuilder,private db:AngularFireDatabase,private snackBar:MatSnackBar,private fb: FirebaseApp,private ddis:DropDownItemsService) {
    this.userInfoRef=this.db.database.ref("/userInfo");
    this.addressRef=this.db.database.ref('/address');
    this.authRef=this.db.database.ref('/auth');
    this.roles=this.ddis.getRoles();
    this.districts=this.ddis.getDistricts();
    this.subDistricts=this.ddis.getSubDistrict();
   }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
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
        zone:["",Validators.required],
        subDistrict:["",Validators.required],
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
        email:['',[this.emailOrEmpty]],
      },{
        validator:this.matchPassword
      })
    });

    // get user name list
    this.userInfoRef.on('value',snap=>{
      this.names=[];
      // console.log(snap.val());
      let data=snap.val();
      if(data!=null){
        Object.keys(data).forEach(key=>this.names.push(
          {name:data[''+key].fullName,
        photo:data[''+key].photo}
        ));
      // console.log(this.options);
      }
      
    }
  );


  
  let userInfoGroup=<FormGroup>this.registrationForm.controls.userInfo;
  this.nameAutoSuggestion(userInfoGroup,'fatherName');
  this.nameAutoSuggestion(userInfoGroup,'motherName');
  this.nameAutoSuggestion(userInfoGroup,'invitedBy');

  let addressGroup=<FormGroup>this.registrationForm.controls.address;
  this.districtAutoSuggestion(addressGroup);
  this.subDistrictAutoSuggestion(addressGroup);

}

districtAutoSuggestion(addressGroup:FormGroup){
  
  addressGroup.controls.district.valueChanges
  .subscribe(val=>{
    if(val==='' || val===null){
      this.filteredDistricts=[];
    }else{
      this.filteredDistricts=this.districtFilter(val);
    }
  })

}

subDistrictAutoSuggestion(addressGroup:FormGroup){
  addressGroup.controls.subDistrict.valueChanges
  .subscribe(val=>{
    if(val==='' || val===null){
      this.filteredSubDistrict=[];
    }else{
      this.filteredSubDistrict=this.subDistrictFilter(val);
    }
  })
}

nameAutoSuggestion(fg:FormGroup,controlName:string){
  fg.get(controlName).valueChanges
  .subscribe(val=>{
    if(val==='' || val===null){
      this.filteredNames=[];
    }else{
      this.filteredNames=this.nameFilter(val);
    } 
  });
}


districtFilter(val){
  return this.districts.filter(option =>
    option.toLowerCase().includes(val.toLowerCase()));
}

subDistrictFilter(val){
  return this.subDistricts.filter(option=>
  option.toLowerCase().includes(val.toLowerCase()));
}

nameFilter(val){
  return this.names.filter(item =>
    item.name.toLowerCase().includes(val.toLowerCase()));
}

  displaySnackBar(){
    this.snackBar.open("Registration sucessfull",'',{
      duration:2000,verticalPosition:'top'
    });
    this.registrationComplete=true;
  }

   emailOrEmpty(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
}

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
      this.photo=event.target.files[0];
    }
  }

  matchPassword(ac:FormGroup){
    let password=ac.controls.password.value;
    let conPasswordCon=ac.controls.conPassword;
    if(password!=conPasswordCon.value){
      conPasswordCon.setErrors({matchPassword:true});
    }else{
      return null;
    }
    // console.log(password);
  }

  
  uploadPhoto(userInfo){
    let storageRef = this.fb.storage().ref('img/'+this.photo.name);
        var task=storageRef.put(this.photo);
        task.on('state_changed',
        snap=>
          console.log(snap)
          ,
      err=>console.log(err)
        ,()=>{
         // push to userinfo table
         userInfo.photo=task.snapshot.downloadURL;
      console.log(task.snapshot.downloadURL);
      this.userInfoRef.push(userInfo);
      

    })
  }
  signup(){
    if(this.registrationForm.valid){
      let temp=this.registrationForm.controls.userInfo.value;
      let fg=<FormGroup>this.registrationForm.controls.userInfo;
      temp.dob=(<Date>fg.controls.dob.value).toLocaleDateString();
   
          // console.log(temp);
      // push to address table
        this.addressRef.push(this.registrationForm.controls.address.value);
      // push to auth table
        this.authRef.push(this.registrationForm.controls.auth.value);
        console.log(this.registrationForm.controls.auth.value);
        this.displaySnackBar();
        this.registrationForm.reset();
        if(this.photo){
          this.uploadPhoto(temp);
        }else{
          this.userInfoRef.push(temp);
        }    
    }else if(!this.registrationComplete){
      // Object.keys(this.registrationForm.controls).forEach(field=>{
      //   this.registrationForm.get(field).markAsTouched({onlySelf:true});
      })
    
    }
  
  }

}
