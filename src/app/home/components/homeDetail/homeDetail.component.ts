import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageSliderComponent } from 'src/app/shared/components/image-slider/image-slider.component';
import { Tabs, Slider, Channel } from 'src/app/model/home';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homeDetail',
  templateUrl: './homeDetail.component.html',
  styleUrls: ['./homeDetail.component.css']
})
export class HomeDetailComponent implements OnInit {

  @ViewChild(ImageSliderComponent, { static: true }) imgSliderRef: ImageSliderComponent


  imageSliders: Slider[] = [
    {
      imgUrl: 'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=8f77360ed83f8794ccff4e2ee21a0ead/728da9773912b31bad63189f8a18367adab4e17d.jpg',
      caption: '我是图片一'
    },
    {
      imgUrl: 'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=8f77360ed83f8794ccff4e2ee21a0ead/728da9773912b31bad63189f8a18367adab4e17d.jpg',
      caption: '我是图片二'
    },
    {
      imgUrl: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg',
      caption: '我是图片三'
    },
  ]

  channelsData: Channel[] = [
    { id: 1, title: '女装', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3655477213,4176881162&fm=15&gp=0.jpg' },
    { id: 1, title: '女装', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3655477213,4176881162&fm=15&gp=0.jpg' },
    { id: 1, title: '女装', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3655477213,4176881162&fm=15&gp=0.jpg' },
    { id: 1, title: '女装', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3655477213,4176881162&fm=15&gp=0.jpg' },
    { id: 1, title: '女装', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3655477213,4176881162&fm=15&gp=0.jpg' },
    { id: 1, title: '女装', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3655477213,4176881162&fm=15&gp=0.jpg' },

  ]

  selectedTab:string = ''

  constructor(private router:ActivatedRoute) { }
  ngOnInit() {
    console.log(1111)
    this.router.paramMap.subscribe(params=>{
      this.selectedTab = params.get('tablink')
      console.log(this.selectedTab === 'hot')
    })
  }
  onSelect(i: number) {
    console.log(i)
  }

  ngAfterViewInit(): void {
    // console.log(this.imgSliderRef)

  }

}
