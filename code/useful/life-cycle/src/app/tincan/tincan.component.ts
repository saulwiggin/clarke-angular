import {
    Component,
    Input,
    SimpleChanges
} from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { ShopService } from "../service/shop.service" ;

@Component({
  selector: 'tincan',
  templateUrl: './tincan.component.html',
  styleUrls: ['./tincan.component.css']
})
export class TincanComponent {

    sequence: Subscription;
    displaySeq : number;
    id : number;
    name : string;

    @Input() product;
    @Input() price;

    constructor() {}

    // ===============================================

    ngOnInit() {}

    ngOnDestroy() {}

    ngOnChanges() {}

    ngDoCheck() {}

    // ===============================================
    
    createSequence() {

        // Need to unsubscribe an Observable in OnDestroy.

        this.id = Date.now();

        this.sequence = Observable
        .interval(1000)
        .subscribe( n => {
            this.displaySeq = n;
            console.log( this.id , n);
        });
    }

}
