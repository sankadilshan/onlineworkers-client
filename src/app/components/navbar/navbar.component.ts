import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user="Admin"
districts=['Colombo','Gampaha','Kaluthara','Kandy','Mathale','Nuwara-Eliya','Anuradhapura','Rathnapura',
         'Galle','Mathara','Hambanthota','Madakalapuwa','Ampara','Puththalama','Kurunegala','Jaffna','Polonnaruwa',
         'Badulla','Monaragala','Vauniyawa']
cat=[
  {title:'Job Role',description:'In this case you can fid kind of job roles,U can find all of your jobs'},
  {title:'Job Role',description:'In this case you can fid kind of job roles,U can find all of your jobs'},
  {title:'Job Role',description:'In this case you can fid kind of job roles,U can find all of your jobs'}
]         
  constructor() { }

  ngOnInit() {
  }
  getDistrict(event){
         console.log(event.target.innerHTML)
  }

}
