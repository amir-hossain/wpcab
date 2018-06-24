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
    if (selectedItemId) {
      return new Promise(resolve => {
        this.connectiorService.getAuth(selectedItemId)
          .then(res => {
            // console.log(res.val().userInfo);
            resolve(res.val());
          });

      });
    } else {
      return new Promise(resolve => {
        let autoInfo = [];
        this.connectiorService.getAuth()
          .then(res => {
            // console.log(res.val());
            let data = res.val();
            if (data) {
              Object.keys(data).forEach(key => {
                autoInfo.push(data['' + key])
              });
            }
            resolve(autoInfo);
          });

      });
    }

  }

  public getShort(limit?:number,startKey?:string, ) {
    if (startKey || limit) {
      return new Promise(resolve => {
        let source = [];
        this.connectiorService.getShort(limit, startKey)
          .then(res => {
            // console.log(res.val());
            let data = res.val();
            if (data) {
              Object.keys(data).forEach(key => {
                source.push(data[key]);
              });
            }
            resolve(source);
          });

      });
    }else {
      return new Promise(resolve => {
        let names = [];
        this.connectiorService.getShort()
          .then(res => {
            // console.log(res.val());
            let data = res.val();
            if (data) {

              Object.keys(data).forEach(key => names.push(
                {
                  name: data[key].fullName,
                  zone: data[key].zone,
                  subDistrict: data[key].subDistrict
                }
              ));
            }
            resolve(names);
          });

      });
    }

  }

  public setUser(obj) {
    return this.connectiorService.setUser(obj);
  }

  public setShort(key: string, obj: {}) {
    this.connectiorService.setShort(key, obj);
  }

  public setAddress(key: string, obj: {}) {
    this.connectiorService.setAddress(key, obj);
  }

  public setAuth(key: string, obj: {}) {
    this.connectiorService.setAuth(key, obj);
  }

}
