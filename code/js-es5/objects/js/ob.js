
// Objects are unique, and can never be equal to other objects.

var italy =  { capital:"Rome", lang:"it" };
var italia = { capital:"Rome", lang:"it" };

console.log( italy === italia );

var a = {};
var b = {};

console.log( a === b );

// Simple assignment does a copy by reference.
// Both variables point to the same OBJECT.

var spain = { capital:"Madrid", lang:"es" };
var espana = spain;

console.log( spain === espana );

// =============================================

var fred = {
	name : "Fred" ,
	gender : "his" ,
	lottery : [ 5,6,7,8,4 ] ,
	age : 64 ,
	food : "Curry",
	smoker : false
};

var jane = {
	name : "Jane" ,
	gender : "her" ,
	age : 46 ,
	food : "Chips",
	smoker : true,
	lottery : [ 15,6,7,8,24 ]
};

// =============================================

delete jane.smoker;
delete fred.smoker;

fred.hobby = { type : "Hiking" , location : "Yorkshire" };
jane.hobby = { type : "Dancing" , location : "Venezuala" };

// =============================================

localStorage.fred = JSON.stringify( fred );
var fred = JSON.parse( localStorage.fred );

// =============================================

var people = [ fred , jane ];

people.forEach( biog )

function biog( p ) {

	console.log( p.name + " likes " + p.hobby.type + " and " +
				 p.gender + " favourite food is " + p.food + "." )
}

// =============================================

// Object literals can contain methods/code
// 2 major problems :
// Easy to break encapsulation : e.g. change value first/last directly.
// Scope : THIS is a dynamic run-time property, which depends how a function
// is called/invoked, not how it is written.

var person = {

	first : "Fred" ,
	last : "Smith" ,
	setName : function( f,l ) {
		this.first = f;
		this.last = l;
	},
	getName : function() {
		return this.first + " " + this.last;
	}
}

// Object literals useful for grouping together related functions.

person.setName( "Mary", "Jones");
console.log( person.getName());

// =============================================
