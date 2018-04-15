import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dest',
  templateUrl: './dest.component.html',
  styleUrls: ['./dest.component.css']
})
export class DestComponent implements OnInit {

    from:FormGroup;

    defaults = { hotel:"four", hirecar:false };

    constructor() { }

    ngOnInit() {
        this.from = new FormGroup({
            hotel: new FormControl(this.defaults.hotel),
            hirecar: new FormControl(this.defaults.hirecar)
        });

        this.from.valueChanges
            .subscribe( data => console.log( data ))
    }
}
