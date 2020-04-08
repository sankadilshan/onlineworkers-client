import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
opened=false;
search=""
  constructor() { }

  ngOnInit() {
  }

  searching(){
    console.log('search',this.search);
    this.search=""
  }
}
