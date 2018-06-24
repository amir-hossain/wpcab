import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ConnectorService {


  constructor(private db: AngularFireDatabase) { }

  public getUserInfo(selectedItemId) {
    return this.db.database.ref('users/' + selectedItemId).once('value', snap => {
      console.log(snap.val().address);
      console.log(snap.val().userInfo);
    });


  }

  public getAddress(selectedItemId) {
    return this.db.database.ref('users/' + selectedItemId).once('value', snap => console.log(snap.val().userInfo));

  }

  public getTotal() {
    return this.db.database.ref('/total').once('value', snap => console.log('total ' + snap.val()));
  }

  public getAuth(selectedItemId?) {
    if (selectedItemId) {
      return this.db.database.ref('auth/' + selectedItemId).once('value', snap => console.log('auth ' + snap.val()));
    } else {
      return this.db.database.ref('auth/').once('value', snap => console.log('auth ' + snap.val()));
    }
  }

  public getShort() {
    return this.db.database.ref('short').once('value', snap => console.log(snap.val()));
  }

  public setUser(obj) {
    return this.db.database.ref('/users/').push(obj).key;
  }

  public setShort(key:string,obj:{}){
    this.db.database.ref('/short/' + key + '/').set(obj);
  }

  public setAddress(key:string,obj:{}){
    this.db.database.ref('/users/' + key + '/address').set(obj);
  }

  public setAuth(key:string,obj:{}){
    this.db.database.ref('/auth/' + key).set(obj);
  }

}

