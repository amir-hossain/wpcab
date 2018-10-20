import { Injectable } from '@angular/core';
import { Data } from '../data/Data'
import { User } from '../model/User'
import { HttpClient } from "@angular/common/http";
import { forEach } from '@angular/router/src/utils/collection';
import { UserShort } from '../model/UserShort';
import { Observable } from 'rxjs';
import { Subscribable } from 'rxjs/Observable';

@Injectable()
export class LinkService {

  private static data: Data;

  constructor(private http: HttpClient) {
    LinkService.data = new Data(http);
  }

  public insertUser(user: User) {

    return LinkService.data.insertUser(user);

  }

  public getUsers(pageNumber):Subscribable<any> {
      return LinkService.data.getUser(pageNumber);
  };

}

