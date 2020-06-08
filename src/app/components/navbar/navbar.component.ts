import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SocialService } from 'src/app/service/social.service';
import { catchError } from 'rxjs/operators';
import { UserinfoService } from 'src/app/service/userinfo.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() emitMessage = new EventEmitter<string>()
  @Output() emitFilterdData = new EventEmitter<string>()
  _pavatar = "../assets/img/logo/default-p.PNG"
  user1 = "Admin"
  districts: Array<string> = ['Colombo', 'Gampaha', 'Kaluthara', 'Kandy', 'Mathale', 'Nuwara-Eliya', 'Anuradhapura', 'Rathnapura',
    'Galle', 'Mathara', 'Hambanthota', 'Madakalapuwa', 'Ampara', 'Puththalama', 'Kurunegala', 'Jaffna', 'Polonnaruwa',
    'Badulla', 'Monaragala', 'Vauniyawa', 'sanka']
  cat = [
    { title: 'carpenter', description: ' carpenter1In this case you can fid kind of job roles,U can find all of your jobs' },
    { title: 'Plumber', description: 'In this case you can fid kind of job roles,U can find all of your jobs' },
    { title: 'driver', description: 'In this case you can fid kind of job roles,U can find all of your jobs' },
    { title: 'data entry', description: 'In this case you can fid kind of job roles,U can find all of your jobs' },
    { title: 'Job Role', description: 'In this case you can fid kind of job roles,U can find all of your jobs' },
    { title: 'Job Role', description: 'In this case you can fid kind of job roles,U can find all of your jobs' },
    { title: 'Job Role', description: 'In this case you can fid kind of job roles,U can find all of your jobs' },
    { title: 'Job Role', description: 'In this case you can fid kind of job roles,U can find all of your jobs' }
  ]
  likes = 4000;
  expand = false;

  constructor(private _router: Router,
    private _socialService: SocialService,
    private _userInfoSErvice:UserinfoService) { }

  ngOnInit() {
  }
  getDistrict(district: string) {
    const queryParams: any = {}
    this._socialService.getFilterdData().subscribe(data => {
      const _filterData = data['jobDic'].filter(function (dist) {
        return dist.district == district;
      })
      queryParams.filteredDistricts = JSON.stringify(_filterData);
      const navigationExtras: NavigationExtras = {
        queryParams,
        fragment: "districtFilterdData"
      }
      this._router.navigate(["/home/" + 1234], navigationExtras)
    })
  }


  getCategeory(categeory: string) {
    const queryParams: any = {}
    this._socialService.getFilterdData().subscribe(data => {
      const filterdData = data['jobDic'].filter(function (categeor) {
        return categeor.title == categeory.toLocaleLowerCase()
      })
      queryParams.filteredCategeory = JSON.stringify(filterdData)
      const navigationExtras: NavigationExtras = {
        queryParams, fragment: "categeoryfilterdata"
      }
      this._router.navigate(["/home/" + 1234], navigationExtras)

    })

    // console.log(this.filterdData)
    this.emitFilterdData.emit(categeory)

  }
  clickAcc(){
    console.log("acc")
  
    this._router.navigate(["/profile/"+this.user1])
  }
  clickAdditionalInformation(){
    this._router.navigate(["/info/"+this.user1])
  }
  clickCreatePost(){
    this._router.navigate(["/profile/"+this.user1])
  }
   
  logout(){
    this._userInfoSErvice.logout()
  }
}
