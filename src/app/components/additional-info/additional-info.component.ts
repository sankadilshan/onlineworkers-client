import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/models/userInfo.models';
import { UserinfoService } from 'src/app/service/userinfo.service';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,
             private _userInfoService:UserinfoService) { }

  userInfo: UserInfo = new UserInfo()
  userInfoForm1: FormGroup
  userInfoForm2: FormGroup
  userInfoForm3: FormGroup
  ngOnInit() {

    this.userInfoForm1 = this._formBuilder.group({
      'fullName': [this.userInfo.fullName, [Validators.required]],
      'address': [this.userInfo.address, [Validators.required]],
      'city': [this.userInfo.city, [Validators.required]],
      'district': [this.userInfo.district, [Validators.required]]
    })
    this.userInfoForm2 = this._formBuilder.group({
      'description': [this.userInfo.description, [Validators.required, Validators.minLength(100), Validators.maxLength(300)]],
      'userArea': [this.userInfo.jobArea, [Validators.required]]
    })
    this.userInfoForm3 = this._formBuilder.group({
      'experiance': [this.userInfo.experiance, [Validators.required, Validators.minLength(100), Validators.maxLength(300)]]
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
  submitDetails() {
    console.log('userinfo', this.userInfo);
    this._userInfoService.postUserInfo(this.userInfo, 1).subscribe((res: Response) => {
      console.log(res)
    },
      (error: Error) => {
        console.log(error);
       
      })
  }
}
