import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class ConnectorService {


  constructor(private db:AngularFireDatabase) { }

  public getUserInfo(selectedItemId){
      return this.db.database.ref('users/'+selectedItemId).once('value',snap=>{
        console.log(snap.val().address);
        console.log(snap.val().userInfo);
      });
    
 
  }

  public getAddress(selectedItemId){
    return this.db.database.ref('users/'+selectedItemId).once('value',snap=>console.log(snap.val().userInfo));
    
  }

  public getTotal(){
    return  this.db.database.ref('/total').once('value',snap=>console.log('total ' +snap.val()));
  }

  public getAuth(selectedItemId){
    return  this.db.database.ref('auth/'+selectedItemId).once('value',snap=>console.log('total ' +snap.val()));
  }
}

