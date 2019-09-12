import { Directive, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {
    @HostBinding('style.grid-area') area = 'title'
    constructor(private elf: ElementRef, private rd2: Renderer2) {

    }

}
