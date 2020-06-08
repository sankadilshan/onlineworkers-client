import { Component, OnInit, Inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MatBottomSheetRef } from '@angular/material';
import { SocialService } from 'src/app/service/social.service';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-notifications',
  templateUrl: './bottom-notifications.component.html',
  styleUrls: ['./bottom-notifications.component.scss']
})
export class BottomNotificationsComponent implements OnInit {
 notification
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(){
    console.log("trigger bottom notification")
    

     
  }
  
}
