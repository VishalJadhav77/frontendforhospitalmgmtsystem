import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate{

  constructor(private adminauthservice:AdminauthService,private router :Router) { }

  canActivate(){
     if (this.adminauthservice.isUserLoggedIn()){
      return true;
     } else{
      this.router.navigate(['adlogin'])
      return false;
     }
  }
}
