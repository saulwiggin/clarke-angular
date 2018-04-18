import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    word : string = "squirrel";
    userWord = "";
    letters : string[] = [];
    game : boolean = false;

    constructor() {
        this.createGame();
    }

    createGame() {
        this.letters = this.shuffle( this.word.split(""));
    }

    addLetter( letter ) {
        this.userWord += letter;

        if( this.userWord.length === this.word.length ) {
            this.checkWord();
        }
    }

    checkWord() {
        this.game = ( this.word === this.userWord );
    }

    shuffle( ar )  {
        return ar.sort(function() {
          return .5 - Math.random();
        });
    }

}
