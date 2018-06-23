import { Injectable } from '@angular/core';
import { ConnectorService } from './connector.service';
import { Observable } from "rxjs/Rx"

@Injectable()
export class DataService {

  constructor(private connectiorService: ConnectorService) { }

  public getUserInfo(selectedItemId?) {
    return new Promise(resolve => {
      this.connectiorService.getUserInfo(selectedItemId)
        .then(res => {
          // console.log(res.val().userInfo);
          resolve(res.val().userInfo);
        });
    });

  }

  public getAddress(selectedItemId?) {
    return new Promise(resolve => {
      this.connectiorService.getAddress(selectedItemId)
        .then(res => {
          // console.log(res.val().userInfo);
          resolve(res.val().address);
        });
    });

  }

  public getTotal() {
    return new Promise(resolve => {
      this.connectiorService.getTotal()
        .then(res => {
          // console.log(res.val().userInfo);
          resolve(res.val());
        });

    });

  }

  public getAuth(selectedItemId?) {
    return new Promise(resolve => {
      this.connectiorService.getAuth(selectedItemId)
        .then(res => {
          // console.log(res.val().userInfo);
          resolve(res.val());
        });

    });
  }

}
