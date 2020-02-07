import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Output() emitMessage=new EventEmitter<string>()
@Output() emitMessage1=new EventEmitter<string>()
user1="Admin"
districts=['Colombo','Gampaha','Kaluthara','Kandy','Mathale','Nuwara-Eliya','Anuradhapura','Rathnapura',
         'Galle','Mathara','Hambanthota','Madakalapuwa','Ampara','Puththalama','Kurunegala','Jaffna','Polonnaruwa',
         'Badulla','Monaragala','Vauniyawa','sanka']
cat=[
  {title:'Job Role',description:'In this case you can fid kind of job roles,U can find all of your jobs'},
  {title:'Job Role',description:'In this case you can fid kind of job roles,U can find all of your jobs'},
  {title:'Job Role',description:'In this case you can fid kind of job roles,U can find all of your jobs'},
  {title:'Job Role',description:'In this case you can fid kind of job roles,U can find all of your jobs'}
]   
likes=4000;  
expand=false;    
  constructor(private _router:Router) { }

  ngOnInit() {
  }
  getDistrict(district:string){
     console.log(district)
     this.emitMessage.emit(district)
  }

  clickCategeory(v){
    this.expand=!this.expand;
    console.log(this.expand)
    //  console.log(v)
  }
  clickAbout(element){
    console.log(element)
     this.emitMessage1.emit(element)
  }
}
