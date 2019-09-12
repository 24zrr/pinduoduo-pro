import { Directive, ElementRef, Renderer2, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
    
    @HostBinding('style.grid-area') area = "image" 
    @HostBinding('style.width') @Input() appGridItemImage = '2rem'
    // @HostBinding('style.height') @Input() appGridItemImage = '2rem'
    @HostBinding('style.object-fit') @Input() fitMode = 'none'
    constructor(private elf: ElementRef, private rd2: Renderer2) {

     }
     ngOnInit(): void {
        //  this.rd2.setStyle(this.elf.nativeElement, 'grid-area', 'image')
        //  this.rd2.setStyle(this.elf.nativeElement, 'width', this.appGridItemImage)
         this.rd2.setStyle(this.elf.nativeElement, 'height', this.appGridItemImage)
        //  this.rd2.setStyle(this.elf.nativeElement, 'object-fit', this.fitMode)
     }
}
