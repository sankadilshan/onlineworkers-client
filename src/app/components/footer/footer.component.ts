import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomNotificationsComponent } from '../bottom-notifications/bottom-notifications.component';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
telephone=' +94715837534'
email=' onlineworker@yahoo.com'
msg=' comments'
  constructor(private _bottomNotification:MatBottomSheet,private _socialService:SocialService) { }

  ngOnInit() {
  }

  openBottomNotification(){
    let data= null
    this._socialService.getTodayNotifiaction().subscribe(
      res=>{
        console.log(res['post'])
        this._bottomNotification.open(BottomNotificationsComponent,{
          data: res['post']
        });
      }
    )
  
     
     console.log('notification bottom')
  }
}
