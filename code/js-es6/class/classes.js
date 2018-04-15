
// ES6 classes

class Rectangle {

    constructor(length, width) {
        console.log( "Rectangle" );
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

var rect = new Rectangle(6,4);
console.log( rect.getArea());

class Square extends Rectangle {

    constructor(length) {
        console.log( "Square" );
        super(length, length);
    }

    getArea() {
        return super.getArea() + " sq metres";
    }
}

var sq = new Square(4);
console.log( sq.getArea());
