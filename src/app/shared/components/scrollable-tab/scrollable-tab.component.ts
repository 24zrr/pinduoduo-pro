import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Tabs } from 'src/app/model/home'

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {
    @Input() public bgColor:string
    @Input() public menus: Tabs[] = []
    @Output() public tabSelected: EventEmitter<any> = new EventEmitter()

    activeIndex = -1;
  
    constructor() { }

    ngOnInit() {

    }
    
    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log('ngOnChanges')    
    // }

    // ngAfterContentInit(): void {
    //     console.log('ng-content初始化')
    // }

    // ngAfterContentChecked(): void {
    //     console.log('ng-content脏检查')
    // }

    // ngAfterViewInit(): void{
    //     console.log('组件初始化')
    // }

    // ngAfterViewChecked(): void {
    //     console.log('组件脏检查')
    // }

    handleSelection(i){
        this.activeIndex = i
        this.tabSelected.emit(i)
    }
}
