
// Use access modifiers for constructor shorthand.

class Player {

    // Error : Properties first,last do not exist on type 'Person'.
    // constructor( first:string, last:string ) {}

    constructor( private first:string, private last:string ) {}

    describe() {
        console.log(this.first,this.last);
    }
}

let p = new Player("Fred","Smith");
p.describe();

// ================================================================

// Defines the minimum public properties that a class implementing
// this interface has to provide.

interface Human{
    gender:string;
    age:number;
}

class Person implements Human {

    constructor( public gender:string, public age:number ) {}

    describe() {
        console.log( this.gender, this.age );
    }
}

let j = new Person( "female",47 );
j.describe();
