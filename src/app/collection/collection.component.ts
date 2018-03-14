import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import{Router} from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  activeUserRole;
  userInfoArry=[];
  filteredArry=[];
  addressArry=[];
  mixedArray=[];
  constructor(private db:AngularFireDatabase,private router:Router) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');

    // get user info
    this.db.database.ref('userInfo').once('value')
    .then(snap=>{
      // console.log(snap.val());
      let data=snap.val();
      if(data){
        Object.keys(data).forEach(key=>this.userInfoArry.push(data[''+key]));
      }
      
    });

    // ger address 
    this.db.database.ref('address').once('value')
    .then(snap=>{
      let data=snap.val();
      if(data){
        // console.log(snap.val());
        Object.keys(data).forEach(key=>
          this.addressArry.push(data[''+key]));
          this.createMixedArry()
      }
    })

    
  }

  createMixedArry(){
    let temp;
    for(let i=0;i<this.userInfoArry.length;i++){
      temp={
        fullName:this.userInfoArry[i].fullName,
        zone:this.addressArry[i].zone,
        subDistrict:this.addressArry[i].subDistrict
      };
      console.log(temp)
      this.mixedArray.push(temp);
    }

    this.filteredArry=this.mixedArray;
    
  }

  nameFilter(name:string){
    // console.log(name);
    if(this.nameFilter){
      this.filteredArry=this.mixedArray.filter(val=>
        val.fullName.toLowerCase().startsWith(name.toLowerCase()))
    }
   
  }

  zoneFilter(zone:string){
    if(this.addressArry){
      this.filteredArry=this.mixedArray.filter(val=>
        val.zone.toLowerCase().startsWith(zone.toLowerCase()))
    }
   
    }

    itemClick(index){
      localStorage.setItem('index',index);
        this.router.navigateByUrl('details');
    }
    subDistrictFilter(subDistrict:string){
      if(this.userInfoArry){
        this.filteredArry=this.mixedArray.filter(val=>
          val.subDistrict.toLowerCase().startsWith(subDistrict.toLowerCase()))
      // console.log(bakFilteredArray);
      }
      
  }
}

