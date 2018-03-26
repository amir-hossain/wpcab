import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Location} from '@angular/common'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userInfo;
  address;
  auth;
  activeUserRole;
  constructor(private db:AngularFireDatabase,private loc:Location) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
    let selectedIndex=localStorage.getItem('index');
    //ger user info
    this.fetchData('userInfo',selectedIndex).then(val=>this.userInfo=val);
    this.fetchData('address',selectedIndex).then(val=>this.address=val);
    this.fetchData('auth',selectedIndex).then(val=>this.auth=val);
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
}
