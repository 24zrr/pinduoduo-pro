import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent } from './components/scrollable-tab/scrollable-tab.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { GridItemDirective } from './directives/grid-item.directive';
import { GridItemTitleDirective } from './directives/grid-item-title.directive';
import { GridItemImageDirective } from './directives/grid-item-image.directive';


@NgModule({
    declarations: [
        ScrollableTabComponent, 
        ImageSliderComponent, 
        HorizontalGridComponent,
        GridItemDirective,
        GridItemTitleDirective,
        GridItemImageDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports:[
        CommonModule,
        FormsModule,
        ScrollableTabComponent,
        ImageSliderComponent, 
        HorizontalGridComponent,
        GridItemDirective,
        GridItemTitleDirective,
        GridItemImageDirective
    ]

})
export class SharedModule { }
