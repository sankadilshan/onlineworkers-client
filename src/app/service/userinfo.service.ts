import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { Observable  } from 'rxjs/observable';
import { UserInfo } from 'src/app/models/userInfo.models';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {AppError} from 'src/app/ex-handle/AppError'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
	
  private header={headers:{ 'Content-Type' : 'application/json'}}

  constructor(private _http:HttpClient, private _urlService:UrlService) { }

postUserInfo(userInfo:UserInfo,id:any){
 const header={headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW5rYSIsImV4cCI6MTU4NTUwODQyMiwidXNlcklkIjoxLCJpYXQiOjE1ODU1MDI0MjJ9.VorQN9HS963G2eMQZ2G7AJH3d47-xBhGG8adstKzRCk'
 })}
 return this._http.post(this._urlService.onlineWorkers.profileService.body.postUserInfo+id,JSON.stringify(userInfo),header);
 } 

getUserinfo(){
  return this._http.get(this._urlService.onlineWorkers.profileService.heading);
}
getComments(){
  return this._http.get('../../assets/mock-data/job-data.json');
}
checkUsername(username:string){
  let params={username:username}
  return this._http.get(this._urlService.onlineWorkers.profileService.body.checkUser,{params})
}

register(user:any){ 
  return this._http.post(this._urlService.onlineWorkers.profileService.body.register,JSON.stringify(user),this.header)
}

login(user:any){
  return this._http.post(this._urlService.onlineWorkers.profileService.body.login,JSON.stringify(user),this.header)}
}
