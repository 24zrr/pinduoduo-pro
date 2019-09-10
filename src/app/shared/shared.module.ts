import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableTabComponent } from './components/scrollable-tab/scrollable-tab.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';


@NgModule({
    declarations: [ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent],
    imports: [
        CommonModule
    ],
    exports:[
        ScrollableTabComponent, 
        ImageSliderComponent, 
        HorizontalGridComponent
    ]

})
export class SharedModule { }
