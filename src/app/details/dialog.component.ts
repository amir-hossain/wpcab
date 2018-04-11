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
    @Inject(MAT_DIALOG_DATA) public data: any,private db:AngularFireDatabase,private router:Router) {}

  no(): void {
    this.dialogRef.close();
  }
  yes(): void {
    this.dialogRef.close();
    this.db.database.ref('/users/' + this.data.key).remove();
    this.db.database.ref('/short/' + this.data.key).remove();
    this.db.database.ref('/auth/' + this.data.key).remove();
    console.log(this.data.total);
    this.db.database.ref('/').update({
      total:this.data.total-1
    }).then(val=>{
      localStorage.removeItem('key');
      this.router.navigateByUrl('delete-sucessfull');
    }  
    );
   
    // console.log(this.data.total-1);
    }

}
