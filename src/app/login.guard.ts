import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{Router} from '@angular/router';
@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // console.log(state.url);
        if(state.url==='/'){
          this.router.navigateByUrl('login');
        }else if(localStorage.getItem('activeUserRole')){
          return true;
        }else{
          console.log(state.url);
          this.router.navigateByUrl('login');
        }
  }
}
