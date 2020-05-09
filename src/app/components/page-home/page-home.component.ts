import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScrollToService } from 'ng2-scroll-to-el';
import { NotifierService } from 'angular-notifier';
import { SocialService } from 'src/app/service/social.service';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { trigger, transition, query, style, stagger, keyframes, animate } from '@angular/animations';
import { async } from '@angular/core/testing';
import { filter } from 'rxjs/operators';

const CACHE_KEY="JOB_DATA"
@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css', './spinner.scss'],
  animations:[
     trigger('animation',[
       transition('*=>*',[
           query(':enter',style({opacity:0}), {optional:true}),
           query(':enter',stagger('300ms',[
             animate('1s ease-in',keyframes([
               style({opacity:0,transform:'translateX(-200px)',offset:0}),
               style({opacity:0.5,transform:'translateX(-100px)',offset:0.5}),
               style({opacity:1,transform:'translateX(0)',offset:1})
             ]))
           ]),{optional:true})   
       ])
     ])
  ]
})
export class PageHomeComponent implements OnInit {
  isClick=false
  title = "Carpentor"
  name = "Nihal Perera"
  likes = 20003
  comments: number = 12
  pageSize: number = 16;
  pageNumber: number = 1;
  sortBy = "";
  jobDiscription: Array<any>
  user: string = 'nimal'
  infoMessage: string
  date = new Date()
  count;
  data: Array<any>
  load = false;
  n:number
  v:any;
  //need to use summary pipe for this
  description = "Hello im a carpentor and i find a job. I have more experiance about this job and i do it since 2010"

  constructor(private _socialService: SocialService,
    private _userInfoService: UserinfoService,
    private _scrollService: ScrollToService,
    private _notifier: NotifierService,
    private _activatedRoute:ActivatedRoute
  ) { }

ngOnInit() {

    this._activatedRoute.queryParamMap.subscribe(async params=>{
      await this.delay(2000)
      let filteredCategeory = JSON.parse(params.get('filteredCategeory'))
      let filteredDistrict = JSON.parse(params.get('filteredDistricts'))
      if(filteredCategeory){ this.filterNotify(filteredCategeory)}
      if(filteredDistrict){this.filterNotify(filteredDistrict) }

    })
   
    this._socialService.getDetails().subscribe((data: any) => {
      
       console.log('data', data["jobDic"]);
      this.jobDiscription = data["jobDic"]
      localStorage[CACHE_KEY] =JSON.stringify(data['jobDic'])
      this.load = true
      
    },
      (error: any) => {
        console.log('error', error.message)
      })
  
    //user info
    this._userInfoService.getUserinfo().subscribe((data: any) => {
      data.forEach((res) => {
        this._socialService.getUserCount(res['userId']).subscribe(data => {
          res.likes = data['likes']  //add likes response object
          res.comments = data['comments']  //add comments response object
        })
      });
      this.jobDiscription = data;
      this.load = true;
    },
      (error) => {
        console.log(error);
      })
    //like comment
    this._socialService.getCount()

    // this.showNotification()
    this._socialService.getByCategeory('alawwa', 5, 0, "");

   
  }

   getFilteresDistrict(value: string) {}
  //   console.log('emit message district-home ', value)
  //  let cache=JSON.parse(localStorage.getItem(CACHE_KEY))
  //  let district = cache.filter(function(ca){
  //     return ca.district==value;
  //  })
  //  this.jobDiscription=district;
  //  console.log('district',district)
  // }
  //emitFilterdData=>
   getFilteredCategeory(value:string) {}
  //   this.v=value;
  //   console.log('emitfilterdata-home',value)
  //   let cache=JSON.parse(localStorage.getItem(CACHE_KEY))
  //   let categeory=<Array<any>>cache.filter(function(categeory){
  //     return categeory.title==value.toLocaleLowerCase()
  //   })
    // this.filterNotify(categeory)
// }
  //scrolling
  scroll(element) {
    this._scrollService.scrollTo(element, 700, -100)
  }

  //notification
  showNotification(): void {
    this.infoMessage = 'hello \'' + this.user + '\' your using most easiest platform in Sri Lanka earn money using your skills or occupation';
    for (let i = 0; i < 20; i++) {
      this._notifier.notify('success', "you have a new notification");
    }
    this._notifier.notify('success', "you have 3 new comments");
    this._notifier.notify('success', "you have 0 new likes ");
    // this._notifier.notify('info',"you have new notifications");
    if (0 <= this.date.getHours() && this.date.getHours() < 12) {
      let msg = "Good Morning !. " + this.date.toLocaleTimeString()
      this._notifier.notify('info', msg);
    }
    if (12 <= this.date.getHours() && this.date.getHours() < 16) {
      let msg = "Good Afternoon !. " + this.date.toLocaleTimeString()
      this._notifier.notify('info', msg);
    }
    if (16 <= this.date.getHours() && this.date.getHours() < 20) {
      let msg = "Good Evening !. " + this.date.toLocaleTimeString()
      this._notifier.notify('info', msg);
    }
    if (20 <= this.date.getHours() && this.date.getHours() < 24) {
      let msg = "Good Night !. " + this.date.toLocaleTimeString()
      this._notifier.notify('info', msg);
    }
    this._notifier.notify('info', this.infoMessage);


  }
  moreDetails(event) {
    console.log(event)
    // let queryparams={'queryParams':{'pid':event['id'],}}
    //  this._router.navigate(['profile'])
  }

 liking(i:number){
   this.isClick=!this.isClick
   console.log(this.isClick)
   console.log(i)
   this.n=i;
   if(i==1){
     console.log(i)
   }
 }

 private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
 
private filterNotify(data:any){
  if(data.length>0 && data.length !=null && data !=null){
    this.jobDiscription = data;
    this.load=true
    this._notifier.notify('success','Total post:'+data.length)   
  }else{
    this._notifier.notify('info','No post available.')
    this.jobDiscription =new Array<any>()
  }
}

}
