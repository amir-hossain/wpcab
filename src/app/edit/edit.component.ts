import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Location} from '@angular/common';
import {DropDownItemsService} from '../drop-down-items.service';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DropDownItemsService]
})
export class EditComponent implements OnInit{
  activeUserRole;

  //table name
  userInfo;
  address;
  auth;

  //drop down list
  selectedRole;
  roles;
  districts;
  subDistricts;
  zones;
  bloodGroups;

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
    this.fetchData('userInfo',selectedIndex).then(val=>this.userInfo=val);
    this.fetchData('address',selectedIndex).then(val=>this.address=val);
    this.fetchData('auth',selectedIndex).then(val=>{
      this.auth=val;
      //form created after data received
      this.intilizeForm();
    });
    this.roles=this.ddis.getRoles();
    this.districts=this.ddis.getDistricts();
    this.subDistricts=this.ddis.getSubDistrict();
    this.zones=this.ddis.getZone();
    this.bloodGroups=this.ddis.getBloodGroup();
    this.roles=this.ddis.getRoles();
    this.zones=this.ddis.getZone();
   
  }

  fetchData(tableName,index){
    //return the promise after resolve
    return this.db.database.ref(tableName).once('value')
    //then is a resolved promise
    .then(snap=>{
      let temp;
      if(snap){
        let data=snap.val();
        Object.keys(data).forEach((key,i)=>{
        if(i.toString()===index){
          temp=data[''+key];
        }
        })
        //return main data in main callback function
        return temp;
      }
    }
  )
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
    this.dobForm=this.fb.group({
      dob:[this.userInfo.dob,Validators.required]
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
      phone:[this.auth.phone,Validators.required]
    });
    this.passwordForm=this.fb.group({
      password:[this.auth.password,Validators.required]
    });
    this.emailForm=this.fb.group({
      email:[this.auth.email]
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

  done(formName,fieldName,tableName,flagName){
    if(this[formName].valid){
      console.log(this[formName].get(fieldName).value);
    let val=this[formName].get(fieldName).value;
    (<Object>this[tableName])[fieldName]=val;
    this[flagName]=false;
    }
  }

  cencel(formName,fieldName,tableName,flagName){
      this[formName].setValue({
        [fieldName]:this[tableName][fieldName]
      })
    this[flagName]=false;
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
