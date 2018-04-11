import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Location} from '@angular/common';
import {DropDownItemsService} from '../drop-down-items.service';
import {FormBuilder,Validators,FormGroup, AbstractControl, ValidationErrors} from '@angular/forms';
import { FirebaseApp } from 'angularfire2';
import {Router} from '@angular/router'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DropDownItemsService]
})
export class EditComponent implements OnInit{
  loding=false;
  picError=false;
  selectedItemId=localStorage.getItem('key');
  activeUserRole;
  dateSegment;
  photo;
  //temporary profile url
  url;
  
  // changes flage
  authChanges=0;
  userInfoChanges=0;
  addressChanges=0;
  shortChanges=0;

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

  constructor(private db:AngularFireDatabase,private loc:Location,private ddis:DropDownItemsService,private fb:FormBuilder,private fa: FirebaseApp,private router:Router) { }

  ngOnInit() {
    this.loding=true;
    this.activeUserRole=localStorage.getItem('activeUserRole');

    this.db.database.ref('users/'+this.selectedItemId).once('value',snap=>{
      // console.log(snap.val().address);
      this.userInfo=snap.val().userInfo;
      this.address=snap.val().address;
    });

    this.db.database.ref('auth/'+this.selectedItemId).once('value',snap=>{
      // console.log(snap.val());
      this.auth=snap.val();  
    }).then(val=>{
        //form created after data received
        this.initializeForm();
        if(this.userInfo.photo){
          this.url=this.userInfo.photo;
        }else{
          this.url='./assets/img/default-pic.png';
        }
        this.loding=false;
      });

    // get dropdown items
    this.roles=this.ddis.getRoles();
    this.districts=this.ddis.getDistricts();
    this.subDistricts=this.ddis.getSubDistricts();
    this.bloodGroups=this.ddis.getBloodGroups();
    this.zones=this.ddis.getZones();
    this.months=this.ddis.getMonths();
   
  }

  readUrl(event:any) {
    this.url='./assets/img/add.png';
    this.photo=null;
    if (event.target.files && (event.target.files[0].type==='image/png' || event.target.files[0].type==='image/jpeg')) {
      this.picError=false;
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
        // console.log(this.url.);
      }
      
      reader.readAsDataURL(event.target.files[0]);
      this.photo=event.target.files[0];
    }else{
      this.picError=true;
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
  uploadPhoto(){
    this.loding=true;
    let storageRef = this.fa.storage().ref('img/'+this.photo.name);
    var task=storageRef.put(this.photo);
    task.on('state_changed',
    snap=>
      console.log(snap)
      ,
  err=>console.log(err)
    ,()=>{
     // push to userinfo table
     this.db.database.ref('/users/'+this.selectedItemId+'/userInfo').update({
      photo:task.snapshot.downloadURL
     }).then(val=>{
      this.loding=false;
       this.router.navigateByUrl('details');
      });
     
})
  }
  back(){
    new Promise(resolve=>{
      if(this.userInfoChanges){
          this.db.database.ref('users/'+this.selectedItemId+'/userInfo').update(this.userInfo);
      }
      if(this.addressChanges){
        this.db.database.ref('users/'+this.selectedItemId+'/address').update(this.address);
  
      }
      if(this.authChanges){
        this.db.database.ref('auth/'+this.selectedItemId+'/').update(this.auth);
      }

      if(this.shortChanges){
        this.db.database.ref('short/'+this.selectedItemId+'/').update({
          fullName:this.userInfo.fullName,
          zone:this.address.zone,
          subDistrict:this.address.subDistrict
        });
      }

      resolve();

    })
    .then(val=>{
      if(this.photo){
        this.uploadPhoto();
        
      }
      return 1;
    })
    .then(val=>{
      if(!this.photo){
        this.router.navigateByUrl('details');
      }
      
      console.log(val);
    }) 
  }

  initializeForm(){
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
      phone:[this.auth.phone,[Validators.required,this.existPhone.bind(this),Validators.pattern('^\\d+$')]]
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
      zone:[this.address.zone,[Validators.required,this.zoneDoesNotExixt.bind(this)]]
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
      nId:[this.address.nid,Validators.pattern('^\\d+$')]
    });
  }

  zoneDoesNotExixt(ac:AbstractControl):ValidationErrors | null{
    let data =this.zones.find(zone=>zone.toLowerCase()===ac.value.toLowerCase());
    console.log(data);
    if(data){
      return null;
    }else{
      return {zoneDoesNotExixt:true}
    }
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

  done(formName,fieldName,tableName,flagName,changesFlag){
    if(this[formName].valid){
      // console.log(this[formName].get(fieldName).value);
    let val=this[formName].get(fieldName).value;
    (<Object>this[tableName])[fieldName]=val;
    this[flagName]=false;
    this[changesFlag]++;
    if(fieldName==='fullNane' || fieldName==='zone' || fieldName==='subDistrict'){
      this.shortChanges++;
    }
    console.log(this[changesFlag]);
    }
  }

  dobDone(){
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
      this.userInfoChanges++;
      console.log(this.userInfoChanges);
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

  cencelDob(){
    this.dobForm.setValue({
      day:this.dateSegment[0],
      month:this.dateSegment[1],
      year:this.dateSegment[2],
    })
  this.dobEditing=false;
}

zoneAutoSuggestion(val){
  // console.log(val);
  if(!val){
    this.filteredZone=[];
  }else{
    this.filteredZone=this.zones.filter(option=>option.toLowerCase().includes(val.toLowerCase()));
  }
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
