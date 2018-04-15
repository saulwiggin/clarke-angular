
// FUNCTIONS
// Used to define LOCAL scope.

/*
- A simple function call.
- Hoisting allows me to call the function before it is defined.
- Variable s is LOCAL to the function.
- Function name spain becomes part of the global namespace : window.spain
*/

spain();

function spain() {
	var s = "Madrid";
	console.log( s );
}

/*
- The function expression style.
- An anonymous function is assigned to a variable.
- The variable is executed later.
- Only the variable declaration will be hoisted.
*/

var italy = function() {
	var s = "Rome";
	console.log( s );
} ;
italy();

/*
- We could immediately invoke this function expression : IIFE
- The function invokes itself.
*/

var hungary = function() {
	var s = "Budapest";
	console.log( s );
} () ;

/*
- We could drop the variable and just invoke the anonymous function.
- The grammar of JS requires additional parentheses.
- This creates a self-contained scope bubble, that creates no globals.
- Suitable for a script attached to a web banner, injected on another site.
*/

(function() {
	var s = "Lisbon";
	console.log( s );
}) () ;

/*
- We can NAME the anonymous function. This may help debugging.
- And it is not introduced into the global namespace.
*/

(function norway() {
	var s = "Oslo";
	console.log( s );
	console.log( typeof norway === "function" );
}) () ;

console.log( typeof norway === "function" );

/*
- We can pass arguments into the IIFE.
- Sometimes jQuery or the global namespace (window) are passed in.
*/

( function( s ) {
	console.log( s );
}) ( "Helsinki" ) ;

/*
- We can adapt the IIFE to return an object from the function.
- Here, myHoliday is the object returned, as a result of executing the function.
*/

var myHoliday = ( function( c,t ) {

	var hols = {
		city:c,
		temp:t
	};

	return hols;

} ) ( "Seville",94 ) ;

console.log( myHoliday );

/*
- We can return not just an object, but an object literal containing methods.
- But it is easy to break the encapsulation.
*/

var myModule = ( function( s,t ) {

	return {
		city :s,
		temp:t,
		getCity : function() {
			console.log( this.city + " temp " + this.temp + "." );
		}
	};

} ) ( "Seville",94 ) ;

// Break encapsulation
myModule.temp = "Chicken";
myModule.getCity();

/*
- The MODULE PATTERN takes advantage of closure.
- It creates local data/methods.
- And a public API.
- The encapsulation does not break
*/

var modulePattern = ( function( s,t ) {

	// Private ===========================================
	var city = s;
	var temp = t;

	// Public API ========================================
	return {
		getCity : function() {
			console.log( city + " temp " + temp + "." );
		},
		setTemp : function(temperature) {
			temp = temperature;
		}
	};

} ) ( "Seville",94 ) ;

// This code will not corrupt the value of CITY and TEMP.
modulePattern.city = -64;
modulePattern.temp = "green";

// This code still works
modulePattern.setTemp(117);
modulePattern.getCity();

/*
- The revealing Module Pattern moves the implementation into
private methods and data
*/

var revealModulePattern = ( function( s,t ) {

	// Private ===========================================
	var city = s;
	var temp = t;

	function _getCity() {
		console.log( city + " temp " + temp + "." );
	}
	function _setTemp(temperature) {
		temp = temperature;
	}

	// Public API ========================================
	return {
		getCity : _getCity,
		setTemp : _setTemp	// Pass 1 argument : the temperature
	};

} ) ( "Seville",94 ) ;
