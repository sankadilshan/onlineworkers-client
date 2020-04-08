import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

onlineWorkers={
  profileService:{
    heading:"http://localhost:8082",
    body:{
      checkUser:"http://localhost:8082/user",
      register:"http://localhost:8082/register",
      login:"http://localhost:8082/login",
      members:"http://localhost:8082/members",
      postUserInfo:"http://localhost:8082/user-info/"
    }
  },
  socialService:{
    heading:"http://localhost:8083/social",
    body:{
      putlikes:"http://localhost:8083/social/likes/profileownerid",
      putcomments:"http://localhost:8083/social/comments/profileownerid",
      get:"http://localhost:8083/social/profileownerid",
      getlikes:"http://localhost:8083/social/likes",
      getcomments:"http://localhost:8083/social/comments",
      count:"http://localhost:8083/social/count",


    } 
  }
}
  

}
