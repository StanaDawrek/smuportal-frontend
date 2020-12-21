import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bms-main-page',
  templateUrl: './bms-main-page.component.html',
  styleUrls: ['./bms-main-page.component.css']
})
export class BmsMainPageComponent implements OnInit {

  myimage1:String ="assets/images/1.jpg";
  myimage2:String ="assets/images/2.jpg"

  constructor() { }

  ngOnInit() {
  }

}
