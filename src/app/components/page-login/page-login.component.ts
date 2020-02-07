import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Register } from 'src/app/models/Register.model';
import { Router } from '@angular/router';
import { PaginationServiceService } from 'src/app/service/pagination-service.service';
import { error } from 'util';

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

  constructor(private formBuilder:FormBuilder, private route:Router,private paginationService:PaginationServiceService) { }

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
      this.paginationService.getPage().subscribe(
        (data:any)=>{
        console.log(data);
      },
      error=>{
        console.log("error",error.message)
      })
  }
  getAll(){
   this.paginationService.getAll().subscribe(
   (data:any)=>{
     console.log('all',data)
   },
   (error:any)=>{
     console.log('error',error.message)
   })
  }
  getPages(){
   this.paginationService.getPages(this.pageSize,this.pageNumber,this.sortBy).subscribe(data=>{
   console.log('pagination',data)})
  }
}
