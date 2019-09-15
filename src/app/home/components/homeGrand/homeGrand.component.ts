import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeGrand',
  templateUrl: './homeGrand.component.html',
  styleUrls: ['./homeGrand.component.css']
})
export class HomeGrandComponent implements OnInit {
  data = {age:1}
  date = new Date()
  constructor() { }

  ngOnInit() {
  }

}
