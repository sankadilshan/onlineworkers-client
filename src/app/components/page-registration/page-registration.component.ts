import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Register } from 'src/app/models/Register.model';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { NotifierService } from 'angular-notifier';
import { UserinfoService } from 'src/app/service/userinfo.service';

@Component({
  selector: 'app-page-registration',
  templateUrl: './page-registration.component.html',
  styleUrls: ['./page-registration.component.css']
})
export class PageRegistrationComponent implements OnInit {
  hide=true;
  matError=true
user:Register=new Register()
 registerForm:FormGroup
  constructor(private formbuilder:FormBuilder,private route:Router,
    private _dialogRef:MatDialogRef<PageRegistrationComponent>, @Inject(MAT_DIALOG_DATA) public _data:Register,
    private _notifier:NotifierService,
    private _dialog:MatDialog,
    private _userInfoService:UserinfoService) { }
      
  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      'username':[this.user.username, 
                    [Validators.required,Validators.minLength(6)]],
      'password':[this.user.password, 
                        [Validators.required,
                           Validators.minLength(6), 
                            Validators.maxLength(16)]],
       'email':[this.user.email,
                   [Validators.required,
                       Validators.email ]],
        'contactNo':[this.user.contactNo,
                        [Validators.required,
                          Validators.pattern('[0-9]{10}')
                          ]],
         'role':[this.user.role,
                     [Validators.required]]                                                   
    })
  }
  onSubmitRegister(){
    let username=this.registerForm.value['username']
    this._userInfoService.checkUsername(username).subscribe(res=>{
    
      if(res['jsonResponse']['status']==200){
        this.error(this.registerForm.value)
     } 
     if(res['jsonResponse']['status']==404){
      console.log('register',this.registerForm.value)
      this._userInfoService.register(this.registerForm.value)
       .subscribe(res => console.log(res));
   } 
     
    })
  
  
  }

  private error(register:any){
    this._notifier.notify('error',register['username']+',username already exist!.')
    this._notifier.notify('error','enter username again.')
    this._dialog.open(PageRegistrationComponent);

  }
  onNoClick(): void {
    this._dialogRef.close();
  }

  login(){
    this.route.navigate(['login']);
  }

}
