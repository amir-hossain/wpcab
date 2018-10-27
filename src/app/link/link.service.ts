import { Injectable } from '@angular/core';
import { Data } from '../data/Data'
import { User } from '../model/User'
import { HttpClient } from "@angular/common/http";
import { Subscribable, Observable } from 'rxjs/Observable';

@Injectable()
export class LinkService {

  private static data: Data;

  constructor(private http: HttpClient) {
    LinkService.data = new Data(http);
  }

  public insertUser(user: User) {

    return LinkService.data.insertUser(user);

  }

  public getUsersByPage(pageNumber):Subscribable<any> {
      return LinkService.data.getUsersByPage(pageNumber);
  };

  public getUserById(id):Subscribable<any> {

    return LinkService.data.getUserById(id);
};

}

