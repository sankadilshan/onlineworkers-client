import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/models/userInfo.models';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { Register } from 'src/app/models/Register.model';
import { ScrollToService } from 'ng2-scroll-to-el';
import { NotifierService } from 'angular-notifier';

export class Security {
  username: string;
  password: string
}
export class Profile {
  email: string="onlineworkers@yahoo.com"
  contactNo: string
  description: string
  area: String

  constructor(email:string,contact:string,description:string,area:string){
        this.email=email
        this.contactNo=contact
        this.description=description
        this.area=area
  }
  //need to set getter and setter without constructor
}

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private _userInfoService: UserinfoService,
    private _scrollService:ScrollToService,
    private _notifier:NotifierService) { }

  description = "nov 4, 2019 - The default animation can be customized to something other than just a 360 degree rotation. Basically you can create a component that swaps between mat-icon's when clicked or when a parent element like a button is clicked. Prerequisites are you have a an"
  address = "2nd mile post,Laxapana"
  email = "onlineworkers@yahoo.com"
  contactNo = "0718676767"
  area = "plumnber,carpenter,teller"  

  userInfo: UserInfo = new UserInfo()
  security: Security = new Security()
  profile: Profile = new Profile(this.email,this.contactNo,this.description,this.area)
  userInfoForm1: FormGroup
  userInfoForm2: FormGroup
  userInfoForm3: FormGroup
  profileInfoForm: FormGroup
  securityForm: FormGroup

  username: string = "onlineworkers"
  tips: boolean = false
  hide:boolean=true

  ngOnInit() {
   

    this.userInfoForm1 = this._formBuilder.group({
      'fullName': [this.userInfo.fullName, [Validators.required]],
      'address': [this.userInfo.address, [Validators.required]],
      'city': [this.userInfo.city, [Validators.required]],
      'district': [this.userInfo.district, [Validators.required]]
    })
    this.userInfoForm2 = this._formBuilder.group({
      'description': [this.userInfo.description, [Validators.required, Validators.minLength(100), Validators.maxLength(300)]],
      'userArea': [this.userInfo.userArea, [Validators.required]]
    })
    this.userInfoForm3 = this._formBuilder.group({
      'experiance': [this.userInfo.experiance, [Validators.required, Validators.minLength(100), Validators.maxLength(300)]]
    })
    this.profileInfoForm = this._formBuilder.group({
      'email': [this.profile.email,[Validators.required,Validators.email]],
      'contactNo': [this.profile.contactNo,[Validators.pattern('[0-9]{10}') ]],
      'description': [this.profile.description,[Validators.minLength(100), Validators.maxLength(300)]],
      'area': [this.profile.area]
    })
    this.securityForm = this._formBuilder.group({
      'username': [this.security.username],
      'password': [this.security.password, [Validators.minLength(4), Validators.maxLength(16)]]
    })

  }

  onSubmitUserDetails() {
    this.userInfo.setFullname(this.userInfoForm1.value['fullName'])
    this.userInfo.setAddress(this.userInfoForm1.value['address'])
    this.userInfo.setCity(this.userInfoForm1.value['city'])
    this.userInfo.setDistrict(this.userInfoForm1.value['district'])

  }
  onSubmitUserDescribePath() {
    this.userInfo.setDescription(this.userInfoForm2.value['description'])
    this.userInfo.setArea(this.userInfoForm2.value['userArea'])

  }
  onSubmitUserExperiance() {
    this.userInfo.setExperiance(this.userInfoForm3.value['experiance'])
  }
  //form1
  submitUserDetails() {
    console.log('userinfo', this.userInfo);
    this._userInfoService.postUserInfo(this.userInfo, 1).subscribe((res: Response) => {
      console.log('submit user details',res)
      if(res.status ==201)
         this._notifier.notify('success',"information registration is success")
    },
      (error: Error) => {
        console.log(error);
        this._notifier.notify('error','registration failed, please try again')

      })
  }
  //form 2
  onSubmitProfileInfo(){
    console.log('change profile',this.profileInfoForm.value)
    this._userInfoService.updateProfileInfo(this.profileInfoForm.value,1).subscribe(res=>{
                  console.log(res)
    })
  }
  //fomr3
  onSubmitSecurity(){
    console.log('security',this.securityForm.value)
    this.securityForm.reset()
  }
  scroll(element) {
    this._scrollService.scrollTo(element, 700, -100)
  }
}
