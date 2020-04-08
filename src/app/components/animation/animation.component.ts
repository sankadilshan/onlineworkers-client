import { Component, OnInit } from '@angular/core';
declare const animationScroll:any;

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css','./anim.scss'] 
})
export class AnimationComponent implements OnInit {
 
  constructor() { }
  
  ngOnInit() {
    animationScroll();
  }


}
