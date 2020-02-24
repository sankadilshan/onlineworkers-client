import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
 _profile_service_url='http://localhost:8081/user-info'
 _social_service_url='http://localhost:8083'
  constructor(private _http:HttpClient) { }

getUserinfo(){
  return this._http.get(this._profile_service_url);
}

}
