import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
 title="Carpentor"
 name="Nihal Perera"
 likes=20003
 comments=12
 
 //need to use summary pipe for this
 description="Hello im a carpentor and i find a job. I have more experiance about this job and i do it since 2010"
 jobDic=[
   {title:"Carpentor",name:"Nihal Perera",description:"Hello im a carpentor and i find a job. I have more experiance about this job and i do it since 2010",created_date:"2019-12-23",district:"Nuwara-Eliya"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010",created_date:"2019-12-23",district:"Colombo"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010",created_date:"2019-11-23",district:"Galle"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010",created_date:"2019-09-23",district:"Mathara"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010",created_date:"2019-10-23",district:"Anuradhapura"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010",created_date:"2019-12-23",district:"Nuwara-Eliya"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010"},
   {title:"Plumbor",name:"Sasthri Perera",description:"Hello im a plumber and i find a job. I have more experiance about this job and i do it since 2010"}
   
 ]
 constructor() { }

  ngOnInit() {
    console.log(this.jobDic)
  }

}
