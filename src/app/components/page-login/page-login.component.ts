import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Register } from 'src/app/models/Register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
 hide=true;
 user:Register=new Register();
 loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private route:Router) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      'username':[this.user.username, [Validators.required]],
      'password':[this.user.username,[Validators.required,
                                       Validators.minLength(6),
                                      Validators.maxLength(16)]]
    })
  }

  onLoginForm(){
    alert(this.user.username+"    "+this.user.password)
    console.log(this.user.username)
  }

  register(){
    this.route.navigate(['register']);
  }

}
