import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Register } from 'src/app/models/Register.model';
import { Router } from '@angular/router';
import { error } from 'util';
import { SocialService } from 'src/app/service/social.service';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog'
 import { PageRegistrationComponent } from '../page-registration/page-registration.component';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  hide = true;
  pageSize = 5;
  pageNumber = 2;
  sortBy = "";
  user: Register = new Register();
  loginForm: FormGroup;
  path = '../assets/img/socialicon/facebook.png'
  social = [
    { id: 1, alt: 'facebook', path: '../assets/img/socialicon/facebook.png' },
    { id: 2, alt: 'twitter', path: '../assets/img/socialicon/twitter.png' },
    { id: 3, alt: 'google+', path: '../assets/img/socialicon/google+.svg' },
  ]
  regi = false
  constructor(private formBuilder: FormBuilder,
    private _router: Router,
    private _socialService: SocialService,
    private _userInfoService: UserinfoService,
    private _dialog: MatDialog,
    private _notifier: NotifierService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: [this.user.username, [Validators.required]],
      password: [this.user.username, [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)]]
    })

    this.pagination()
    this.getAll()
    this.getPages()
  }
  openRegister(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    this._notifier.notify('error',"username already exist");
    this.open()
  }
  private open() {
     this._dialog.open(PageRegistrationComponent);
  }
  getErrorMessage() {

  }
  socialLogin(id) {
    if (id == 1)
      console.log("facebbok");
    if (id == 2)
      console.log("twitter");
    if (id == 3)
      console.log("google")
  }

  onLoginForm() {

    console.log(this.loginForm.value)
    this._userInfoService.login(this.loginForm.value).subscribe((res) => {
      if (res['jsonResponse']['status'] == 201) {
        console.log('res', res)
        this.login();
      }
    },
      (error: Error) => {
        console.log('error', error);
        if (401 == error['status']) {
          this._notifier.notify('error', 'username or password incorrect.')
          this.loginForm.reset()
        }
        else {
          this._notifier.notify('error', 'server error, please try again...')
          this.loginForm.reset()
        }
      })
  }
  private login() {
    this._router.navigate(['home/', 'user1'])
  }

  ///////////////////////////////////////////
  pagination() {
    console.log("hello")
    this._socialService.getPage().subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log("error", error.message)
      })
  }
  getAll() {
    this._socialService.getAll().subscribe(
      (data: any) => {
        console.log('all', data)
      },
      (error: any) => {
        console.log('error', error.message)
      })
  }
  getPages() {
    this._socialService.getPages(this.pageSize, this.pageNumber, this.sortBy).subscribe(data => {
      console.log('pagination', data)
    })
  }
}
