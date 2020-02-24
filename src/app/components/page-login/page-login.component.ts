import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Register } from 'src/app/models/Register.model';
import { Router } from '@angular/router';
import { error } from 'util';
import { SocialService } from 'src/app/service/social.service';
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
 hide=true;
 pageSize=5;
 pageNumber=2;
 sortBy="";
 user:Register=new Register();
 loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private route:Router,private _socialService:SocialService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      'username':[this.user.username, [Validators.required]],
      'password':[this.user.username,[Validators.required,
                                       Validators.minLength(6),
                                      Validators.maxLength(16)]]
    })
    this.pagination()
    this.getAll()
    this.getPages()
  }

  onLoginForm(){
    alert(this.user.username+"    "+this.user.password)
    console.log(this.user.username)
  }

  register(){
    this.route.navigate(['register']);
  }
  pagination(){
    console.log("hello")
      this._socialService.getPage().subscribe(
        (data:any)=>{
        console.log(data);
      },
      error=>{
        console.log("error",error.message)
      })
  }
  getAll(){
   this._socialService.getAll().subscribe(
   (data:any)=>{
     console.log('all',data)
   },
   (error:any)=>{
     console.log('error',error.message)
   })
  }
  getPages(){
   this._socialService.getPages(this.pageSize,this.pageNumber,this.sortBy).subscribe(data=>{
   console.log('pagination',data)})
  }
}
