import { Component, OnInit, Input} from '@angular/core';
// import { Emoji } from '../../decorators';
import { Channel } from 'src/app/model/home'

@Component({
    selector: 'app-horizontal-grid',
    templateUrl: './horizontal-grid.component.html',
    styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
    // @Emoji() tip = 'hello'
    @Input() public channels: Channel[] = []
    constructor() { }

    ngOnInit() {
    }

}
