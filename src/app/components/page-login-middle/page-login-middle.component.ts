import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, keyframes, animate } from '@angular/animations';
declare const animMiddle:any

@Component({
  selector: 'app-page-login-middle',
  templateUrl: './page-login-middle.component.html',
  styleUrls: ['./page-login-middle.component.css'],
  animations:[
    trigger('listAnimation',[
        transition('* => *',[
          query(':enter', style({ opacity:0}), {optional:true}),

          query(':enter',stagger('300ms',[
            animate('1s ease-in', keyframes([
               style({opacity: 0,transform: 'translateY(-75px)',offset:0}),
               style({opacity: .5,transform: 'translateY(30px)',offset:0.5}),
               style({opacity: 1,transform: 'translateY(0)',offset:1})
            ]))
          ]),{optional:true},),
        ])
      ]),
    trigger('anim',[
        transition('* => *',[
          query('.col', style({ opacity:0, transform: 'translateX(-40px)'})),
          query('.col', stagger('500ms',[
            animate('800ms 1.2s ease-out', style({opacity: 1 , transform: 'translateX(0)'})),
          ])),
          query('.col',[
            animate(1000 ,style('*'))
          ])
       ]) 
      ])
  ]
})
export class PageLoginMiddleComponent implements OnInit {
items=[];
  constructor() {
    this.items=[
        "hey this is ann item",
        "here is another one",
        "this is awesome"
    ]
   }

  ngOnInit() {
    animMiddle();
  
  }

}
