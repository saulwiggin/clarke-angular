import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Pack } from './type.pack';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['../app.component.css']
})

export class PackComponent implements OnInit {

    @Input() pack : Pack;

    constructor() {}

    ngOnInit() {
        console.log(this.pack);
    }

}
