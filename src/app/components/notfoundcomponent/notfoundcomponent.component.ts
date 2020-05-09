import { Component, OnInit } from '@angular/core';
import {trigger,transition,style,animate,query,stagger, state} from '@angular/animations'

@Component({
  selector: 'app-notfoundcomponent',
  templateUrl: './notfoundcomponent.component.html',
  styleUrls: ['./notfoundcomponent.component.css','./notfound.scss'],
  animations:[
        trigger('listAnimation',[
          transition('*=>*',[
            query(':leave',[
              stagger(100,[
                animate('0.5s',style({
                  opacity:0,
                  color:'red',
                  background:'teal',
                  
                }))
              ])
            ],{optional:true}),
            query(':enter',[
               style({opacity:0}),
              stagger(10000,[
                animate('2s',style({
                  opacity:1,
                  transform:'translateY(100)'
                }))
              ])
            ],{optional:true})
          ])  
        ]),
       
  ]
})
export class NotfoundcomponentComponent implements OnInit {

  constructor() { }
 items=[]
 show=true
 showItems(){
   this.items=['hello world','i love you','do you love me','i love virtusa','im a software enginer','i want earn abovr  1500000']
 }
 hideItems(){
   this.items=[]
 }
  ngOnInit() {
   this.toggle()
   this.showItems()
   setInterval(()=>{
     this.show = !this.show
     setTimeout(()=>{
        this.show= !this.show
     },100)
   },4000);


  }
 toggle(){
   console.log(this.items.length)
    this.items.length ? this.hideItems() : this.showItems() 
  }
}
