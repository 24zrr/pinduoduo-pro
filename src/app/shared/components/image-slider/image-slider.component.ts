import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, QueryList, ViewChildren } from '@angular/core';
import { Slider } from 'src/app/model/home'

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
    @Input() public sliders: Slider[] = []
    @Input() sliderHeight = '160px';
    @Input() intervalBySeconds = 2;
    @ViewChild('imageSlider', { static: true })
    imgSlider: ElementRef;
    selectedIndex = 0;
    intervalId;

    constructor(private rd2: Renderer2) { }

    ngOnInit() {

    }

    ngAfterViewInit(): void {
        if (this.intervalBySeconds <= 0) {
            return;
        }
        // this.intervalId = setInterval(() => {
        //     this.rd2.setProperty(
        //         this.imgSlider.nativeElement,
        //         'scrollLeft',
        //         (this.getIndex(++this.selectedIndex) *
        //             this.imgSlider.nativeElement.scrollWidth) /
        //         this.sliders.length
        //     );
        // }, this.intervalBySeconds * 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    getIndex(idx: number): number {
        return idx >= 0
            ? idx % this.sliders.length
            : this.sliders.length - (Math.abs(idx) % this.sliders.length);
    }

    handleScroll(ev) {
        const ratio =
            ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
        this.selectedIndex = Math.round(ratio);
    }
}
