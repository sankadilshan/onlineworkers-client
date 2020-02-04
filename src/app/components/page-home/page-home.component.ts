import { Component, OnInit } from '@angular/core';
import { PaginationServiceService } from 'src/app/service/pagination-service.service';
import { Router } from '@angular/router';
import {ScrollToService} from 'ng2-scroll-to-el';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
 title="Carpentor"
 name="Nihal Perera"
 likes=20003
 comments:Number=12
 pageSize:Number=16;
 pageNumber:Number=1;
 sortBy="";
 jobDic:Array<any>
 emitMessage
 //need to use summary pipe for this
 description="Hello im a carpentor and i find a job. I have more experiance about this job and i do it since 2010"
 
 constructor(private _paginationService:PaginationServiceService,private _router:Router,
            private _scrollService:ScrollToService ) { }

  ngOnInit() {
    this._paginationService.getDetails().subscribe((data:any)=>{
      console.log('data',data["jobDic"]);
     this.jobDic=data['jobDic'];
    },
    (error:any)=>{
      console.log('error',error.message)
    })
    
  }

  getChileEmitMessage(msg:String){
    console.log('emit message ',msg)
     this.emitMessage=msg;
  }
  routingAboutbtn(value){
    console.log(value)
    this._scrollService.scrollTo(value) 
  }
  scroll(element){
    //console.log('element',element)
   this._scrollService.scrollTo(element,1200,-100)
  }

}
