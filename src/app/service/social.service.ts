import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Count } from '../models/count';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private _http:HttpClient) { }
  url='http://localhost:8082/page'
  _social_url='http://localhost:8083'
  profile_url='http://localhost:8081/customer'

  getPage(){
   return this._http.get(this.url+'/health',{responseType:'text'});
  }
  getAll(){
   return this._http.get(this.url,{responseType:'json'})
  }
  getPages(ps:any,pn:any,sb:any){
  let params={
     pageSize:ps,
     pageNumber:pn,
     sortBy:sb}
   return this._http.get(this.url+'/page',{params})
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
    return this._http.get(this.url+'/address/'+address,{params}).subscribe(
      data=>{console.log('address',data)}
    )
  }
  getAllComments(){
    return this._http.get(this._social_url+'/comments');
   
  }
  getAllMembers(){
    return this._http.get(this._social_url+"/members");
      
  }
  getCount():Observable<Count[]>{
    return this._http.get<Count[]>(this._social_url+'/count')
  }
  getUserCount(userid:number):Observable<Count>{
    return this._http.get<Count>(this._social_url+"/profileOwnerId/"+userid+"/count")
  }
}
