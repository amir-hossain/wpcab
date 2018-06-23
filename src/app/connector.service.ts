import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class ConnectorService {
  userInfo;
  address;

  constructor(private db:AngularFireDatabase) { }

  public getUserInfo(selectedItemId){
      return this.db.database.ref('users/'+selectedItemId).once('value',snap=>{
        // console.log(snap.val().address);
        // console.log(snap.val().userInfo);
        this.address=snap.val().address;
        return snap.val().userInfo;
        
      });
    
 
  }

  public getAddress(selectedItemId){
    return this.db.database.ref('users/'+selectedItemId).once('value',snap=>{
        // this.userInfo=snap.val().userInfo;
        return snap.val().address;
      });
    
  }

  public getTotal(){
    return  this.db.database.ref('/total').once('value',snap=>{
      // console.log('total ' +snap.val())
      return snap.val();
    });
  }

  public getAuth(selectedItemId){
    return  this.db.database.ref('auth/'+selectedItemId).once('value',snap=>{
      // console.log(snap.val());
      return snap.val();  
    });
  }
}

