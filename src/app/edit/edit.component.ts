import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Location} from '@angular/common';
import {DropDownItemsService} from '../drop-down-items.service';
import {FormBuilder,Validators,FormGroup, AbstractControl, ValidationErrors} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DropDownItemsService]
})
export class EditComponent implements OnInit{
  activeUserRole;
  dateSegment;
  photo;
  //temporary profile url
  url;
  

  //table name
  userInfo;
  address;
  auth;
  // fetch full auth table data
  authFull=[];

  //drop down list
  selectedRole;
  roles;
  districts;
  subDistricts;
  zones;
  bloodGroups;
  months;

  // filtered list
  filteredDistrict=[];
  filteredsubDistrict=[];
  filteredZone=[];

  //editing flag
  nameEditing=false;
  genderEditing=false;
  dobEditing=false;
  fatherNameEditing=false;
  motherNameEditing=false;
  invitedByEditing=false;
  occupationEditing=false;
  bloodGroupEditing=false;
  phoneEdition=false;
  passwordEditing=false;
  emailEditing=false;
  userNameEditing=false;
  roleEditing=false;
  zoneEditing=false;
  subDistrictEditing=false;
  permanentAddressEditing=false;
  districtEditing=false;
  countryEditing=false;
  nationlityEditing=false;
  nidEditing=false;

  //forms
  nameForm;
  genderForm;
  dobForm;
  fatherNameForm;
  motherNameForm;
  invitedByForm;
  occupationForm;
  bloodGroupForm;
  phoneForm;
  passwordForm;
  emailForm;
  userNameForm;
  roleForm;
  zoneForm;
  subDistrictForm;
  districtForm;
  permanentAddressForm;
  countryForm;
  nationalityForm;
  nIdForm;

  constructor(private db:AngularFireDatabase,private loc:Location,private ddis:DropDownItemsService,private fb:FormBuilder) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
    let selectedIndex=localStorage.getItem('index');
    //ger user info
    this.fetchSelectedData('userInfo',selectedIndex).then(val=>this.userInfo=val);
    this.fetchSelectedData('address',selectedIndex).then(val=>this.address=val);
    this.fetchSelectedData('auth',selectedIndex).then(val=>{
      this.auth=val;
      //form created after data received
      this.intilizeForm();
      if(this.userInfo.photo){
        this.url=this.userInfo.photo;
      }else{
        this.url='./assets/img/default-pic.png';
      }
    });

    // get dropdown items
    this.roles=this.ddis.getRoles();
    this.districts=this.ddis.getDistricts();
    this.subDistricts=this.ddis.getSubDistricts();
    this.bloodGroups=this.ddis.getBloodGroups();
    this.zones=this.ddis.getZones();
    this.months=this.ddis.getMonths();
   
  }

  fetchSelectedData(tableName,index){
    //return the promise after resolve
    return this.db.database.ref(tableName).once('value')
    //then is a resolved promise
    .then(snap=>{
      let temp;
      if(!index){
        temp=[];
      }
      
      if(snap){
        let data=snap.val();
        Object.keys(data).forEach((key,i)=>{
        if(i.toString()===index){
          temp=data[key];
        }
        if(tableName==='auth'){
          this.authFull.push(data[key])
        }
        })
        //return main data in main callback function
        return temp;
      }
    }
  )
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

  existPhone(control:AbstractControl):
  ValidationErrors | null{
    return control.value==='' ? null : this.existenceCheck(this.authFull,control,'phone')
  }

  emailOrEmpty(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
  }

  existEmail(control:AbstractControl):
  ValidationErrors | null{
    return control.value==='' ? null : this.existenceCheck(this.authFull,control,'email')
  }

  existenceCheck(list:any[],control:AbstractControl,fieldName){
    // console.log(fieldName);
    let error=null;
    list.forEach(val=>{
        // console.log(val);
        if(val[fieldName].toString().startsWith(control.value)){
          // console.log('true');
          error={exist:true};
        } 
    })
    
    return error;
  }
  back(){
    this.loc.back();
  }

  intilizeForm(){
    this.nameForm=this.fb.group({
      fullName:[this.userInfo.fullName,Validators.required]
    });
    this.genderForm=this.fb.group({
      gender:[this.userInfo.gender]
    });
    // spite dd/mm/yy
    this.dateSegment=(<string>this.userInfo.dob).split('/');
    this.dobForm=this.fb.group({
      day:[this.dateSegment[0],Validators.required],
      month:[this.dateSegment[1]],
      year:[this.dateSegment[2],Validators.required]

    });
    this.fatherNameForm=this.fb.group({
      fatherName:[this.userInfo.fatherName,Validators.required]
    });
    this.motherNameForm=this.fb.group({
      motherName:[this.userInfo.motherName,Validators.required]
    });
    this.invitedByForm=this.fb.group({
      invitedBy:[this.userInfo.invitedBy,Validators.required]
    });
    this.occupationForm=this.fb.group({
      occupation:[this.userInfo.occupation]
    });
    this.bloodGroupForm=this.fb.group({
      bloodGroup:[this.userInfo.bloodGroup]
    });
    this.phoneForm=this.fb.group({
      phone:[this.auth.phone,[Validators.required,this.existPhone.bind(this)]]
    });
    this.passwordForm=this.fb.group({
      password:[this.auth.password,Validators.required],
      conPassword:[this.auth.password,Validators.required],
    },
    {
      validator:this.matchPassword
    });
    this.emailForm=this.fb.group({
      email:[this.auth.email,[this.emailOrEmpty,this.existEmail.bind(this)]]
    });
    this.userNameForm=this.fb.group({
      userName:[this.auth.userName]
    });
    this.roleForm=this.fb.group({
      role:[this.auth.role]
    });
    this.zoneForm=this.fb.group({
      zone:[this.address.zone,Validators.required]
    });
    this.subDistrictForm=this.fb.group({
      subDistrict:[this.address.subDistrict,Validators.required]
    });
    this.permanentAddressForm=this.fb.group({
      permanentAddress:[this.address.permanentAddress,Validators.required]
    });
    this.districtForm=this.fb.group({
      district:[this.address.district,Validators.required]
    });
    this.countryForm=this.fb.group({
      country:[this.address.country]
    });
    this.nationalityForm=this.fb.group({
      nationality:[this.address.nationality]
    });
    this.nIdForm=this.fb.group({
      nId:[this.address.nid]
    });
  }

  matchPassword(ac:FormGroup){
    let password=ac.controls.password.value;
    let conPasswordCon=ac.controls.conPassword;
    if(password!=conPasswordCon.value){
      conPasswordCon.setErrors({missMatchedPassword:true});
    }else{
      return null;
    }
    // console.log(password);
  }

  done(formName,fieldName,tableName,flagName){
    if(this[formName].valid){
      console.log(this[formName].get(fieldName).value);
    let val=this[formName].get(fieldName).value;
    (<Object>this[tableName])[fieldName]=val;
    this[flagName]=false;
    }
  }

  datedone(){
    if(this.dobForm.valid){
      console.log(this.dobForm.controls.day.value);
      console.log(this.dobForm.controls.month.value);
      console.log(this.dobForm.controls.year.value);
      let day=this.dobForm.controls.day.value;
      let month=this.dobForm.controls.month.value;
      let year=this.dobForm.controls.year.value;
      this.dateSegment[0]=day;
      this.dateSegment[1]=month;
      this.dateSegment[2]=year;
      this.userInfo.dob=day+"/"+month+"/"+year;
      this.dobEditing=false;
    }
  }

  cencel(formName,fieldName,tableName,flagName){
      this[formName].setValue({
        [fieldName]:this[tableName][fieldName]
      })
    this[flagName]=false;
  }
  cencelPassword(){
    this.passwordForm.setValue({
      password:this.auth.password,
      conPassword:this.auth.password,
    })
  this.passwordEditing=false;
}

  cencelDate(){
    this.dobForm.setValue({
      day:this.dateSegment[0],
      month:this.dateSegment[1],
      year:this.dateSegment[2],
    })
  this.dobEditing=false;
}


  autoSuggestion(val,source,temp){
    // console.log(val);
    if(!val){
      this[temp]=[];
    }else{
      this[temp]=this[source].filter(option=>option.toLowerCase().startsWith(val.toLowerCase()));
    }
  }

}
