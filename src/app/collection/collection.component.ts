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
  filteredArry=[];
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');

    // get user info
    this.db.database.ref('userInfo').once('value')
    .then(snap=>{
      console.log(snap.val());
      let data=snap.val();
      Object.keys(data).forEach(key=>this.objArry.push(data[''+key]));
  this.filteredArry=this.objArry;
    });
  }

  nameFilter(name:string){
    // console.log(name);
    this.filteredArry=this.objArry.filter(val=>
    val.fullName.toLowerCase().includes(name.toLowerCase()))
  }

  fatherNameFilter(fatherName:string){
    let bakFilteredArray=this.filteredArry.slice();
    this.filteredArry=this.objArry.filter(val=>
      val.fatherName.toLowerCase().includes(fatherName.toLowerCase()))
   
    }

    motherNameFilter(motherName:string){
      let bakFilteredArray=this.filteredArry.slice();
      this.filteredArry=this.objArry.filter(val=>
        val.motherName.toLowerCase().includes(motherName.toLowerCase()))
     
      }

    // console.log(bakFilteredArray);
    
  }
}

