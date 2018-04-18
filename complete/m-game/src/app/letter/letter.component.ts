import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-letter',
	templateUrl: './letter.component.html',
	styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

    @Input() letter:string;
    @Output() selectLetter = new EventEmitter();

    selected:boolean = false;

	constructor() {}

	ngOnInit() {}

    select() {
        this.selected = true;
        this.selectLetter.emit( this.letter )
    }
}
