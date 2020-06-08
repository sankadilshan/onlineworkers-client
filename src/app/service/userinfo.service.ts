import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { UserInfo } from 'src/app/models/userInfo.models';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable, throwError } from 'rxjs';
import { Config } from 'protractor';
import { catchError, retry } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
    
   private header = { headers: { 'Content-Type': 'application/json' ,'observe':'response','responseType':'json'} }
  constructor(private _http: HttpClient, private _urlService: UrlService, private _auth:AuthenticationService) { }

  postUserInfo(userInfo: UserInfo, id: any):Observable<any>{
    
    return this._http.post(this._urlService.onlineWorkers.profileService.body.postUserInfo +
      id, JSON.stringify(userInfo), this.header);
  }

  updateProfileInfo(userInformation:any,userId:any){
    return this._http.put(this._urlService.onlineWorkers.profileService.body.updateUser+userId,
    JSON.stringify(userInformation),this.header)
  }

  getUserinfo() {
    return this._http.get(this._urlService.onlineWorkers.profileService.heading);
  }

  getComments(): Observable<HttpResponse<Array<any>>> {
    return this._http.get<Array<any>>('../../assets/mock-data/job-data.json',
      { observe: 'response', responseType: 'json' })
  }
  checkUsername(username: string) {
    const options = {
      responseType: 'json' as const,
      observe: 'response' as const,
      params: { username: username } as const

    }
    return this._http.get(this._urlService.onlineWorkers.profileService.body.checkUser, options )
  }
  uploadPictures(file: File, name: string, userId: number, postId?: number) {
    const fd = new FormData();
    fd.append('image', file, name)
    let multipartHeaders = { headers: { 'Content-Type': 'multipart/form-data', 'observe': 'response' } }
    return this._http.post(this._urlService.onlineWorkers.profileService.body.picUpload +
      "userid/" + userId + "/postid/" + postId,
      JSON.stringify(fd), multipartHeaders)
  }

  register(user: any):Observable<any> {
    return this._http.post(this._urlService.onlineWorkers.profileService.body.register,
      JSON.stringify(user), this.header)
  }

  login(user: any) {
    return this._auth.loginUser(user)
  }

  logout(){
    this._auth.logout()
  }


}