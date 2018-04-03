import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AngularFireDatabase} from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls:['dialog.component.css']
})
export class DialogComponent{

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private db:AngularFireDatabase,private router:Router) { }

  no(): void {
    this.dialogRef.close();
  }
  yes(): void {
    this.dialogRef.close();
    // console.log(this.data.userInfoKey);
    // console.log(this.data.addressKey);
    // console.log(this.data.authKey);
    this.db.database.ref('/userInfo/' + this.data.userInfoKey).remove();
    this.db.database.ref('/address/' + this.data.addressKey).remove();
    this.db.database.ref('/auth/' + this.data.authKey).remove();
    this.router.navigateByUrl('delete-sucessfull');
  }

}
