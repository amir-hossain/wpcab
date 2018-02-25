import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  activeUserRole;
  objArry=[];
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');

    // get user info
    this.db.database.ref('userInfo').once('value')
    .then(snap=>{
      console.log(snap.val());
      let data=snap.val();
      Object.keys(data).forEach(key=>this.objArry.push(data[''+key]));
    });

  }

}
