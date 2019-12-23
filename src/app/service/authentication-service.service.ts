import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient:HttpClient) { }
 _url='http://localhost:8080/authenticate'; 
 
  authenticate(username, password){
    console.log(username,password)
    return this.httpClient.post<any>(this._url,{username,password}).pipe(
      map(
        userData=>{
            sessionStorage.setItem('username' ,username);
            let tokenStr='Bearer ' +userData.token;
            sessionStorage.setItem('token',tokenStr);
            return userData;
        }
      )
    )
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('username')
    console.log(!(user==null))
    return !(user==null)
  }
  logOut(){
    sessionStorage.removeItem('username');
  }
}
