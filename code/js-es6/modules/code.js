
import { reverse, hyphenate, getArea, double } from "./utils.js" ;

console.log( reverse( "Broccoli" ))
console.log( hyphenate( "Broccoli is an edible green plant" ));
console.log( getArea(6,4)) ;
console.log( double(2));

// Cannot see LOCAL variable city defined in utils.js
console.log( typeof city === "undefined" );
