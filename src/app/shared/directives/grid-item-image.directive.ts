import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
    @Input() appGridItemImage = '2rem'
    @Input() fitMode = 'none'
    constructor(private elf: ElementRef, private rd2: Renderer2) {

     }
     ngOnInit(): void {
         this.rd2.setStyle(this.elf.nativeElement, 'grid-area', 'image')
         this.rd2.setStyle(this.elf.nativeElement, 'width', this.appGridItemImage)
         this.rd2.setStyle(this.elf.nativeElement, 'height', this.appGridItemImage)
         this.rd2.setStyle(this.elf.nativeElement, 'object-fit', this.fitMode)
     }
}
