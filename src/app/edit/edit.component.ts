import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Location} from '@angular/common';
import {DropDownItemsService} from '../drop-down-items.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DropDownItemsService]
})
export class EditComponent implements OnInit {
  userInfo;
  address;
  auth;
  selectedRole;
  roles;
  districts;
  filteredDistrict=[];
  subDistricts;
  filteredsubDistrict=[];
  zones;
  filteredZone=[];
  bloodGroups;
  activeUserRole;
  nameEditing=false;
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

  constructor(private db:AngularFireDatabase,private loc:Location,private ddis:DropDownItemsService) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
    let selectedIndex=localStorage.getItem('index');
    //ger user info
    this.fetchData('userInfo',selectedIndex).then(val=>this.userInfo=val);
    this.fetchData('address',selectedIndex).then(val=>this.address=val);
    this.fetchData('auth',selectedIndex).then(val=>this.auth=val);
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


  done(info,flagName){
    console.log(info);
    this.selectedRole=undefined;
    this[flagName]=false;
  }

  radioChange(event){
    this.selectedRole=event.value;
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
