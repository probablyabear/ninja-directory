import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "This is the home section of the index page!!!";
  // myString = "This is a custom string bound to an element property."
  // myBoolean = true;
  //
  // alertMe = function(val){
  //   alert(val);
  // }

  @Input() ninja;

  constructor() { }

  ngOnInit() {
  }

}
