import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from 'ng2-scroll-to-el';
import { NotifierService } from 'angular-notifier';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { SocialService } from 'src/app/service/social.service';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { Count } from 'src/app/models/count';

interface  ctype{
 likes:number,
 comments:number
}
@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css','./spinner.scss']
})
export class PageHomeComponent implements OnInit {
 title="Carpentor"
 name="Nihal Perera"
 likes=20003
 comments:number=12
 pageSize:number=16;
 pageNumber:number=1;
 sortBy="";
 jobDiscription:Array<any>
 user:string='nimal'
 infoMessage:string
 date=new Date()
 count;
 data:Array<any>
 load=false;
 //need to use summary pipe for this
 description="Hello im a carpentor and i find a job. I have more experiance about this job and i do it since 2010"

 constructor(private _socialService:SocialService,
             private _userInfoService:UserinfoService,
             private _router:Router,
             private _scrollService:ScrollToService,
             private _notifier:NotifierService
              private user:U) { }

  ngOnInit() {

    this._socialService.getDetails().subscribe((data:any)=>{
     // console.log('data',data["jobDic"]);

    },
    (error:any)=>{
      console.log('error',error.message)
    })
      //user info
     this._userInfoService.getUserinfo().subscribe((data:any)=>{
      data.forEach( (res)=> {
        this._socialService.getUserCount(res['userId']).subscribe(data=>{
           res.likes=data['likes']
           res.comments=data['comments']
        })
      });
      this.jobDiscription=data;
      this.load=true;
     },
     (error)=>{
       console.log(error);
     })
     //like comment
     this._socialService.getCount().subscribe(data=>{
       // console.log('count',data)
        this.count=data;
     })
    this.showNotification()
    this._socialService.getByCategeory('alawwa',5,0,"");


  }

  getChildEmitMessage(msg:string){
    console.log('emit message ',msg)
    this._socialService.getByCategeory(msg,5,0,"");
  }
  //about
  routingAboutbtn(value){
    console.log(value)
    this._scrollService.scrollTo(value)
  }
  //scrolling
  scroll(element){
    //console.log('element',element)
   this._scrollService.scrollTo(element,700,-100)
  }

  //notification
  showNotification(): void {
    this.infoMessage='hello \''+this.user+'\' your using most easiest platform in Sri Lanka earn money using your skills or occupation';
    for(let i=0;i<20;i++){
    this._notifier.notify('success',"you have a new notification");
    }
    this._notifier.notify( 'success',"you have 3 new comments" );
    this._notifier.notify('success',"you have 0 new likes ");
    // this._notifier.notify('info',"you have new notifications");
    if(0<=this.date.getHours() && this.date.getHours()<12){
      let msg="Good Morning !. "+this.date.toLocaleTimeString()
      this._notifier.notify('info',msg);
    }
    if(12<=this.date.getHours() && this.date.getHours()<16){
      let msg="Good Afternoon !. "+this.date.toLocaleTimeString()
      this._notifier.notify('info',msg);
    }
    if(16<=this.date.getHours() && this.date.getHours()<20){
      let msg="Good Evening !. "+this.date.toLocaleTimeString()
      this._notifier.notify('info',msg);
    }
    if(20<=this.date.getHours() && this.date.getHours()<24){
      let msg="Good Night !. "+this.date.toLocaleTimeString()
      this._notifier.notify('info',msg);
    }
    this._notifier.notify('info',this.infoMessage);


  }



}
