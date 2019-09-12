import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {
    @HostBinding('style.display') display = 'grid'
    @HostBinding('style.grid-template-areas') areas = `'image' 'title'`
    @HostBinding('style.place-items') place = 'center'
    @HostBinding('style.width') width = '4rem'
  constructor(private elf:ElementRef,private rd2:Renderer2) {

   }

   ngOnInit(): void {
       
   }

   @HostListener('click',['$event.target'])
   handleClick(ev){
    console.log(ev)
   }
}
