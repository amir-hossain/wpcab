import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  total;
  userInfo;
  address;
  auth;
  activeUserRole;
  selectedItemId=localStorage.getItem('key');
  
  constructor(private db:AngularFireDatabase,private loc:Location,public dialog: MatDialog) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
    let selectedItemId=localStorage.getItem('key');
    // console.log(selectedItemId);
    this.db.database.ref('users/'+this.selectedItemId).once('value',snap=>{
      // console.log(snap.val().address);
      this.userInfo=snap.val().userInfo;
      this.address=snap.val().address;
    });
    this.db.database.ref('/total').once('value',snap=>{
      this.total=snap.val();
      console.log(this.total)
    });

    this.db.database.ref('auth/'+this.selectedItemId).once('value',snap=>{
      // console.log(snap.val());
      this.auth=snap.val();  
    });
    
  }
  
  back(){
    this.loc.back();
  }

  delete(){
    // console.log(this.total)
    let dialogRef = this.dialog.open(DialogComponent, {
      disableClose:true,
      data: { name: this.userInfo.fullName,key:this.selectedItemId,total:this.total}
    });
    
  }
}
