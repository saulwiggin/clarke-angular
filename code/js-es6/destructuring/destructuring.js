
// ES6 destructuring

let flight = {
	from : {
        name : "London Gatwick",
        code : "LGW"
    },
	to : {
        name : "Seville",
        code : "SEV"
    },
	airline : "Iberia",
	ticket	: "Business",
    time : {
        depart	: "06.45",
    	arrive	: "10.15"
    },
	price : 205,
	currency : "euros"

}


let { name,code } = flight.from;
console.log( name,code );

let { name:toName,code:toCode } = flight.to;
console.log( toName,toCode );

let { time,ticket } = flight;
console.log( time,ticket  );

let { carhire = "Avis", airline = "BA" } = flight;
console.log( carhire, airline )

let { price:p = 150 , currency:c ="pounds" } = flight;
console.log( p,c );



// ES6 destructuring

{
	let person = [ "John", "Elton", 42, "Green", "Street"];
	let [ last, first, age, party, town ] = person ;
}

{
	let m = [ "Fuji", "Japan", "4021", 40, 1842 ];
	let [ name, ...facts ] = m;

	console.log( name, facts );
}

{
	// Swap without need for temp variable
	let first = { name:"Smith"};
	let second = { name:"Jones"};
	[ first, second ] = [ second, first ];
	console.log( first, second );
}

// ================================================================

let getCurrency = () =>

	({
		"JP" : "yen",		// Japan
		"MN" : "tögrög",	// Mongolia
		"PL" : "złoty",		// Poland
		"PE" : "sol"		// Peru
	})


const { JP, PE } = getCurrency();
console.log( JP, PE );
