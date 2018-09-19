import { Injectable } from '@angular/core';
import {Data} from '../data/Data'
import { User } from '../model/User'
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LinkService {

  private static data:Data;

  constructor(private http:HttpClient) { 
      LinkService.data=new Data(http);
  }

  public insertUser(user:User){

    return LinkService.data.insertUser(user);
    
  }



}
