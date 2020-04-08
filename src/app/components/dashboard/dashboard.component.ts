import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Immutable from 'immutable';
import { SocialService } from 'src/app/service/social.service';
import { MatDialog } from '@angular/material';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lcount:any=1001;
  mcount:any=524;
  ccount:any=12;
  constructor( private router:Router,private _socialService:SocialService,private _dialog:MatDialog) { }

  directToLogin(){
    this.router.navigate(['login']);
  }
   options=Immutable.Map({
     showDotd:true,
     height: 450,
     showThumbnails:true,  
     thumnailWidth:150  
   });
  
   images=Immutable.List([
    { url:'src\assets\img\dashboard.jpg', title:'1stimg'},
    { url:'src\assets\img\dashboard1.jpg', title:'2stimg'},
   ])
  ngOnInit() {
      this._socialService.getAllComments().subscribe(data=>{
        this.ccount=data['allTotalElement']
        console.log('co',data);
        console.log('co',data['allTotalElement']);
      })
      this._socialService.getAllMembers().subscribe(data=>{
          this.mcount=data;
          console.log('m',data)
      })
      this._socialService.getAllLikes().subscribe(data=>{
         this.lcount=data;
      })
      
  }
  showDialog(){
    this._dialog.open(CommentsComponent);
  }

}
