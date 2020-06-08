import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http';
import { tap, mapTo } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const JWT_TOKEN="JWT_TOKEN"
const USERNAME="USERNAME"
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private header = { headers: { 'Content-Type': 'application/json' ,'observe':'response','responseType':'json'} }
  constructor(private _urlService:UrlService, private _http:HttpClient,private router:Router ) { }

 loginUser(user:any):Observable<any>{
   this.clearLocaleStorage();
  return this._http.post(this._urlService.onlineWorkers.profileService.body.login,
    JSON.stringify(user), this.header)
    .pipe(
      tap(token=>this.doLoginUser(user.username,token)),
      mapTo(true)
      
   )
 }
 
 doLoginUser(username:any,token:any){
   console.log('token',token.jwtToken)
       localStorage.setItem(JWT_TOKEN,token.jwtToken)
       localStorage.setItem(USERNAME,username)
        
 }

 isLoggedIn(){
   return !!this.getJwtToken()
 }
 getJwtToken(){
   //we need to get jwt token from here and always check it is validate;
   return localStorage.getItem(JWT_TOKEN)
 }

 logout(){
     this.clearLocaleStorage()
     this.router.navigate(['/login'],{queryParams:{logOut:true},fragment:'logout=true'})
 }

 clearLocaleStorage(){
  localStorage.removeItem(JWT_TOKEN)
  localStorage.removeItem(USERNAME)
 }
}
