import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fcount=654;
  lcount=1001;
  mcount=524;
  constructor( private router:Router) { }

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

  }

}
