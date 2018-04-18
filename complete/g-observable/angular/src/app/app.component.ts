
import { Component } from '@angular/core';

// In a production environment, do not import the entire RXJS library
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    alphabet: Observable<string>;

    sequence: Observable<number>;
    displaySeq : number;

    constructor() {
        this.createSequence();
        this.createAlphabet();
    }

    createSequence() {

        this.sequence = Observable
        .interval(250)
        .take(25)
        .map((n) => n * 2)

        this.sequence.subscribe( n => this.displaySeq = n );
    }

    createAlphabet() {

        this.alphabet = Observable
        .interval(250)
        .take(26)
        .map(n => String.fromCharCode(65 + n));

    }
}
