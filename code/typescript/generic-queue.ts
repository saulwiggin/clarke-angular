
class Dog{
    breed: string;
    gender:string;

    constructor( b:string,g:string ) {
        this.breed=b;
        this.gender=g;
    }
}

class Queue<T> {

  private q = [];

  constructor() {}
  push = (item: T) => this.q.push(item);
  pop = (): T => this.q.shift();
  debug = () => console.log(JSON.stringify( this.q ));

}

let lotto = new Queue<number>();
lotto.push(0);
lotto.push(1);
lotto.debug();

let kennels = new Queue<Dog>();

let martha = new Dog( "Irish Terrier", "female" );
let fido = new Dog( "Labrador", "male" );

kennels.push( martha );
kennels.push( fido );

kennels.debug();
