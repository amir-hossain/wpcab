import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{Router} from '@angular/router';

@Injectable()
export class AdcountGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('activeUserRole')==='Admin' && localStorage.getItem('activeUserRole')==='Accountant'){
        return true;
      }else{
        console.log(state.url);
        this.router.navigateByUrl('login');
      }
  }
}
