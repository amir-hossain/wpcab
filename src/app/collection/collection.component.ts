import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  displayedColumns = ['name', 'father name', 'mother name'];
  dataSource;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    this.dataSource.filter = filterValue;
  }
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
      this.dataSource = new MatTableDataSource(this.objArry)
      this.dataSource.filterPredicate = 
      (data: any, filter: string) => data.fullName.toLowerCase().includes(filter.toLowerCase());
    });

  }
}

