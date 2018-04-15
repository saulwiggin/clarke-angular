
// Block scope does not exist in ES5.
// Variable declarations are hoisted to top of containing scope

for (var j=0; j < 5; j++) {
	//
}
console.log( typeof j === "undefined" );

// ES6 introduces LET variables, which have block-scope
// and are not hoisted.

for (let k=0; k < 5; k++) {
	//
}
console.log( typeof k === "undefined" );

// =====================================================

// LETs are not initialised until the line where they are declared.

// This means that the area, within a block, above the let declaration
// is an inaccessible area, where the existence, or value, of the let variable
// cannot be tested. This is referred to as The Temporal Dead Zone.
// Good practice : define LETs are the start of their block.

if( true ) {
	// Runtime error : console.log( planet );
	let planet = "Neptune";
}

console.log( typeof planet === "undefined" ); // Returns true

// =================================================

// Lexical scoping is used for LET variables in loop constructs.
// Each function is passed its own independent copy of i.

// If we change this code to use VAR, every function shares the same copy
// of i because of closure. All functions return 10.

var fs = [];

for ( let j=0; j < 10; j++ ) {
  fs.push( function() {
	return j
  })
}

fs.forEach( function( f ) {
	console.log(f())
})

// The ES5 workaround to get the same code working with vars
// requires wrapping each function in its own IIFE.


var fs = [];

for ( var j=0; j < 10; j++ ) {
	( function(j) {
		fs.push(function() {
			return j
		});
	}) ( j )
}

fs.forEach( function( f ) {
	console.log(f())
})
