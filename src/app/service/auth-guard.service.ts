import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _authService:AuthenticationService,
              private _route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(!this._authService.isLoggedIn()){
       this.routeToLogin();
       return true
    }
    return true
  }
 
  private routeToLogin(){
    const queryParams:any=[]
    queryParams.loginError=true
    const navigationExtras:NavigationExtras={
       queryParams
    }

    this._route.navigate(['/login'],navigationExtras)

  }
}
