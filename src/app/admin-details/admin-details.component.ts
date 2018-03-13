import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
  userInfo;
  address;
  auth;
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
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

}
