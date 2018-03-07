import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  activeUserRole;
  userInfoArry=[];
  filteredUserInfoArry=[];
  addressArry=[];
  filteredAddressArry=[];
  filteredSubDistrictArry=[];
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');

    // get user info
    this.db.database.ref('userInfo').once('value')
    .then(snap=>{
      // console.log(snap.val());
      let data=snap.val();
      if(data){
        Object.keys(data).forEach(key=>this.userInfoArry.push(data[''+key]));
  this.filteredUserInfoArry=this.userInfoArry
      }
      
    });

    // ger address 
    this.db.database.ref('address').once('value')
    .then(snap=>{
      
      let data=snap.val();
      if(data){
        console.log(snap.val());
        Object.keys(data).forEach(key=>
          this.addressArry.push(data[''+key]));
          this.filteredAddressArry=this.addressArry;
      }
  
    })
  }

  nameFilter(name:string){
    // console.log(name);
    if(this.nameFilter){
      this.filteredUserInfoArry=this.userInfoArry.filter(val=>
        val.fullName.toLowerCase().startsWith(name.toLowerCase()))
    }
   
  }

  fatherNameFilter(zone:string){
    if(this.addressArry){
      this.filteredAddressArry=this.addressArry.filter(val=>
        val.zone.toLowerCase().startsWith(zone.toLowerCase()))
    }
   
    }

    motherNameFilter(subDistrict:string){
      if(this.userInfoArry){
        this.filteredSubDistrictArry=this.userInfoArry.filter(val=>
          val.subDistrict.toLowerCase().startsWith(subDistrict.toLowerCase()))
      // console.log(bakFilteredArray);
      }
      
  }
}

