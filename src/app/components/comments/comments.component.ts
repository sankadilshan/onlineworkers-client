import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/service/social.service';
import { Title } from '@angular/platform-browser';
import { error } from 'util';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:any;
  constructor(private _socialService:SocialService){}                                                                                                  

  ngOnInit() {
    this._socialService.getAllComments().subscribe(data=>{
      this.comments=data['result'];
      if(data['result']!=null){
      console.log(data);
      console.log(data['allTotalElement']);
      console.log(data['result'])
    }
    }),
    error=>{
      console.log(error);
      
    }    
  }

}
