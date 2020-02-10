import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
telephone=' +94715837534'
email=' onlineworker@yahoo.com'
msg=' comments'
  constructor() { }

  ngOnInit() {
  }
  comments(){
    console.log("comments")
  }
}
