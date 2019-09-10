import { Component, ViewChild } from '@angular/core';
import { Tabs, Slider} from 'src/app/model/home'
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component';
   

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild(ImageSliderComponent, { static: true }) imgSliderRef: ImageSliderComponent

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
    imageSliders: Slider[] = [
        {
            imgUrl: 'http://b.hiphotos.baidu.com/image/h%3D300/sign=92afee66fd36afc3110c39658318eb85/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
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
    onSelect(i:number){
        console.log(i)
    }    

    ngAfterViewInit(): void {
        console.log(this.imgSliderRef)
        
    }
}
