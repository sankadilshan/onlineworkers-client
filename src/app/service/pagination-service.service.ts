import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginationServiceService {

  constructor(private _http:HttpClient) { }
  url='http://localhost:8081/page'

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
}
