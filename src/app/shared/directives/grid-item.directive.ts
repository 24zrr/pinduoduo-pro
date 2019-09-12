import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {

  constructor(private elf:ElementRef,private rd2:Renderer2) {

   }

   ngOnInit(): void {
       this.rd2.setStyle(this.elf.nativeElement, 'display', 'grid')
       this.rd2.setStyle(this.elf.nativeElement, 'grid-template-areas', `'image' 'title'`)
       this.rd2.setStyle(this.elf.nativeElement, 'place-items', 'center')
       this.rd2.setStyle(this.elf.nativeElement, 'width', '4rem')
       
   }
}
