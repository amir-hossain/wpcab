import { Component, OnInit,ViewChild} from '@angular/core';
import{Router} from '@angular/router';
import {MatPaginator} from '@angular/material';
import{CommunicationService} from '../communication.service';
import { TranslateService } from '@ngx-translate/core';
import { LinkService } from '../link/link.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  activeUserRole;
  total=0;
  itemPerPage=10;
  updating=false;
  source=[];
  filteredArry=[];
  previousTempKey;
  currentPage=1;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router:Router,private communicationService: CommunicationService,
    private ts: TranslateService,private linkService:LinkService) {
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
    
    this.getUser();

    
  }



  private getUser() {

    this.showLogingCircle(); 

    this.linkService.getUsersByPage(this.currentPage)
      .subscribe(res => {
        this.createArray(res);
      });
  }

  private showLogingCircle() {
    this.updating = true;
  }

  createArray(obj){
    if(obj){
      this.source=obj.users;
      this.filteredArry=this.source;
      this.total=obj.total;
      this.updating=false;
    }else{
      this.hideLodingCircle(); 
    }
  }
  private hideLodingCircle() {
    this.updating = false;
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

    userClick(user){
      console.log(user);
      localStorage.setItem('key',user.id);
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
    this.showLogingCircle();
    if(this.next()){
      this.currentPage++;
      this.getUser();
    }else  if(this.previous()){
      this.currentPage--;
      this.getUser();
    }


    
    
  }

  

  private next() {
    return this.currentPage < this.paginator.pageIndex+1;
  }

  private previous() {
    return this.currentPage > this.paginator.pageIndex+1;
  }

}



