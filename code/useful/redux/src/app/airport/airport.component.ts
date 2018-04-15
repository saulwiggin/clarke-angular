import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

    fg:FormGroup;

    constructor() { }

    ngOnInit() {
        this.fg = new FormGroup({
            airport: new FormControl(),
            parking: new FormControl()
        });

        this.fg.valueChanges
            .subscribe( data => console.log( data ))
    }
}
