import { Component, ViewChild, OnInit } from '@angular/core';
import {   Router } from '@angular/router';
import { Tabs } from 'src/app/model/home';
import { HomeService } from '../../services/home.service';
   
@Component({
  selector: 'app-homeContainer',
  templateUrl: './homeContainer.component.html',
  styleUrls: ['./homeContainer.component.css']
})
export class HomeContainerComponent implements OnInit {
  tabs = []
  constructor(private router:Router,private service:HomeService) { }
  ngOnInit(){
    this.tabs = this.service.getTab()
  }
  onSelect(e){
    this.router.navigate(['home',e])
    console.log(e)
  }
}
