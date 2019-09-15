import { Injectable } from '@angular/core';
import { Tabs } from 'src/app/model/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  tabs: Tabs[] = [
    {
      title: '热门',
      link: 'http://'
    },
    {
      title: '娱乐',
      link: 'http://'
    },
    {
      title: '体育',
      link: 'http://'
    },
    {
      title: '教育',
      link: 'http://'
    },
    {
      title: '政治',
      link: 'http://'
    },
    {
      title: '科技',
      link: 'http://'
    }]
constructor() { }

getTab(){
  return this.tabs
}

}
