import { Component, OnInit,ViewChild} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import{Router} from '@angular/router';
import {PageEvent,MatPaginator} from '@angular/material';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  activeUserRole;
  length=0;
  pageIndex=0;
  pageSize=10;
  // pageSizeOptions = [2, 3,6];  
  updating=false;
  source=[];
  filteredArry=[];
  previousPageKey;
  nextPageKey;
  previousTempKey;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private db:AngularFireDatabase,private router:Router) { }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
      
    this.db.database.ref('/total').on('value',snap=>
    this.length=snap.val()
  )
    this.getData();
  }

  getData(key?:string):void{
    this.updating=true;
    this.filteredArry=[];
    this.source=[];
    if(key){
      this.db.database.ref('short').orderByKey().startAt(key).limitToFirst(this.pageSize).on('value',
      snap=>{
        // console.log(snap.val());
        this.createArray(snap)
      });
    }else{
      this.db.database.ref('short').orderByKey().limitToFirst(this.pageSize+1).on('value',
      snap=>{
        // console.log(snap.val());
        this.createArray(snap)
      });
    }
  }


  createArray(snap){
    let data=snap.val();
    Object.keys(data).forEach((key,i)=>{
      // console.log(key);
      if(i===0){
        this.previousTempKey=key;
      }
      if(i===this.pageSize){
        this.nextPageKey=key;
        
      }else{
        this.source.push(data[key]);

      }
        // console.log(this.source);
        this.filteredArry=this.source;
        this.updating=false;
        console.log('pre-'+this.previousPageKey+'\nnext-'+this.nextPageKey+'\npreT-'+this.previousTempKey)
      
    });
    
  }
  nameFilter(name:string){
    // console.log(name);
    if(!this.updating){
      this.filteredArry=this.source.filter(val=>
        val.fullName.toLowerCase().startsWith(name.toLowerCase()))
    }
   
  }

  zoneFilter(zone:string){
    if(!this.updating){
      this.filteredArry=this.source.filter(val=>
        val.zone.toLowerCase().startsWith(zone.toLowerCase()))
    }
   
    }

    itemClick(clickedItem){
      console.log(clickedItem);
      localStorage.setItem('key',clickedItem.id);
        this.router.navigateByUrl('details');
    }
    subDistrictFilter(subDistrict:string){
      if(!this.updating){
        this.filteredArry=this.source.filter(val=>
          val.subDistrict.toLowerCase().startsWith(subDistrict.toLowerCase()))
      // console.log(bakFilteredArray);
      }
  }


  pageUpdate(){
    this.updating=true;
    let i=this.paginator.pageIndex;
    let size=this.paginator.pageSize;
    if( i>this.pageIndex){
      // console.log('next page');
      this.previousPageKey=this.previousTempKey;
      this.getData(this.nextPageKey)
    }else if( i<this.pageIndex){
      // console.log('previous page');
      
      this.getData(this.previousPageKey)
    }else{
      // console.log('size changed');
      this.pageSize=this.paginator.pageSize;
      this.getData();
    }
    this.pageIndex=i;
    
  }

  
}



