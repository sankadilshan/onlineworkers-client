import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.scss']
})
export class PostShowComponent implements OnInit {
  _ppic="../assets/img/logo/default-p.PNG"
  post:any
  pageNumber:number=1
  pageSize:number=5
  show=false
  constructor(private _socialSerive:SocialService) { }

  ngOnInit() {
         this._socialSerive.getDetails().subscribe(data=>{
           console.log(data['post'])
           this.post=data['post']
           this.show=true
         })
  }
   
}
