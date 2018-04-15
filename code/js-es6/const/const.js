
// ES6 constants

const CITY = "Cambridge";

// Constants cannot be changed.
// CITY = "Oxford";

// Constants must have an initial value.
// const COUNTY

// Constants have block-level scope.
// Constants, like LET, are not hoisted.

if ( true ) {
	// Runtime error : console.log( typeof COUNTY );
	const COUNTY = "Cambs";
}

console.log( typeof COUNTY === "undefined" );

// ===================================================

// For complex objects/arrays, you are storing a constant reference.
// The properties/elements can still be changed.
//

const DENMARK = {
	lang : "Danish",
	capital : "Copenhagen"
}

DENMARK.lang = "Dansk";
DENMARK.capital = "København";

const fruit = [];

fruit.push( "Apples");
console.log( JSON.stringify( fruit ));

// Stop the array being changed.

const berries = Object.freeze( [] );

// So this will cause a runtime error:
// berries.push( "Blueberries");



// Some developers are using CONST, not LET by default, so that most
// code is immutable, by default, unless you explicitly choose otherwise.
