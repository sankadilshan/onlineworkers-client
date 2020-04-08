import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Count } from '../models/count';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private _http:HttpClient, private _urlService:UrlService) { }
 
  getPage(){
   return this._http.get(""+'/health',{responseType:'text'});
  }
  getAll(){
   return this._http.get("",{responseType:'json'})
  }
  getPages(ps:any,pn:any,sb:any){
  let params={
     pageSize:ps,
     pageNumber:pn,
     sortBy:sb}
   return this._http.get(""+'/page',{params})
  }
  getDetails(){
    return this._http.get('../../assets/mock-data/job-data.json',{responseType:'json'})
  }
  getByCategeory(address:string,ps:any,pn:any,sb:any){
    let params={
      pageSize:ps,
      pageNumber:pn,
      sortBy:sb
    }
    return this._http.get(""+'/address/'+address,{params}).subscribe(
      data=>{console.log('address',data)}
    )
  }
  getAllComments(){
    return this._http.get(this._urlService.onlineWorkers.socialService.body.getcomments);
   
  }
  getAllMembers(){
    return this._http.get(this._urlService.onlineWorkers.profileService.body.members);
      
  }
  getAllLikes(){
    return this._http.get(this._urlService.onlineWorkers.socialService.body.getlikes)
  }
  getUserCount(id:any){
    return null
  }
  getCount(){
    return undefined;
  }

 
}
