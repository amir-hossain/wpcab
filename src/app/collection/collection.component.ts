import { Component, OnInit,ViewChild} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import{Router} from '@angular/router';
import {PageEvent,MatPaginator} from '@angular/material';
import{CommunicationService} from '../communication.service';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

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

  constructor(private db:AngularFireDatabase,private router:Router,private communicationService: CommunicationService,private ts: TranslateService, private dataService: DataService) {
    let lan=localStorage.getItem('lan');
    this.ts.use(lan);
    this.notifyRoot();
   }

   notifyRoot(){
    CommunicationService.navBar=true;
    this.communicationService.emitChange();
   }

  ngOnInit() {
    this.activeUserRole=localStorage.getItem('activeUserRole');
    this.dataService.getTotal().then((res:number) => this.length = res);
    this.getData();
  }

  getData(key?:string):void{
    this.updating=true;
    this.filteredArry=[];
    this.source=[];
    if(key){
      this.dataService.getShort(this.pageSize,key).then((res:any[])=>this.createArray(res));
    }else{
      this.dataService.getShort(this.pageSize+1).then((res:any[])=>this.createArray(res));
    }
  }


  createArray(obj:any[]){
    if(obj){
      for(let i=0;i<obj.length;i++){
        // console.log(key);
        if(i===0){
          this.previousTempKey=obj[i].id;
        }
        if(i===this.pageSize){
          this.nextPageKey=obj[i].id;
        }else{
          this.source.push(obj[i]);
  
        }
          // console.log(this.source);
          this.filteredArry=this.source;
          this.updating=false;      
      }
    }else{
      this.updating=false; 
    }
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



