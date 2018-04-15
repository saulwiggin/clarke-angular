
var spain = [
	{ image:"sevilla.jpg", name:"Sevilla", region:"Andalusia", popl:1.2, temp:94 },
	{ image:"valencia.jpg", name:"Valencia", region:"Valencia", popl:1.5, temp:88 },
	{ image:"barcelona.jpg", name:"Barcelona", region:"Catalonia", popl:4.0, temp:86 },
	{ image:"granada.jpg", name:"Granada", region:"Andalusia", popl:1.25, temp:80 },
	{ image:"caceres.jpg", name:"Caceres", region:"Extremadura", popl:0.1, temp:76 },
	{ image:"alicante.jpg", name:"Alicante", region:"Valencia", popl:0.7, temp:68 },
	{ image:"zaragoza.jpg", name:"Zaragoza", region:"Aragon", popl:0.7, temp:64 },
	{ image:"vigo.jpg", name:"Vigo", region:"Galician", popl:0.2, temp:60 }
];

// FOREACH runs a function on each item in an array. It does not create a new array.

function showRegion( city ) {
	console.log( city.region );
}

spain.forEach( showRegion );

// MAP runs a function on each item in an array and returns a new array.

function getRegion( city ) {
	return city.region;
}

let regions = spain.map( getRegion );

// Filter runs a boolean fucntion against each item and returns a new filtered array

function getHot( city ) {
	return city.temp >= 80
}

let hotCities = spain.filter( getHot );

// Combine MAP and FILTER to get the regions of hot hotCities

let hotRegions = spain.filter( getHot ).map( getRegion );

// REDUCE combines adjacent values in an array and reduces them to a single values

function getPop( city ) {
	return city.popl;
}

let temps = spain.map( getPop );

function add( a,b ) { return a+b };

let totalPop = spain.map( getPop ).reduce( add )
