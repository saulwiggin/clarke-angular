
// Basic types ====================
let year : number = 2016;
let smoker :boolean = false;
let city : string = "Seville ";
console.log( city + year );

// Custom types ====================
let confPass: [ string, number ];
confPass = [ "Fred Smith" , 1024 ];

// Arrays ====================
let lottery: number[] = [ 45,12,87,4,5,77 ];
let lotto: Array<number> = [ 45,12,87,4,5,77 ];

var regions : string[] = [ "Galicia", "Aragon" ];
var regions : Array<string> = [ "Valencia", "Andalusia" ];


// Typescript function in ES5 ====================
let dble : Function = function( n:number ) :number {
	return n*2;
}

function makePerson( n:string, a:number ) : object {
    return { name:n,age:a };
}

let jane:object = makePerson( "Jane Jones",48 );

// Enumerated types ====================

enum Direction { Left, Right, Up, Down };
let turn:Direction = Direction.Left;

enum Size { ExtraSmall, Small, Medium, Large, ExtraLarge };
let xl: Size = Size.ExtraLarge;

console.log( Size[0], typeof Size[0] );
console.log( Size.ExtraSmall, typeof Size.ExtraSmall );

// Any ====================
let stuff:any = {};
stuff = -46;

// Optional parameters ====================

function message( s:string,d?:boolean ) {
	s = d ? "DEBUG: " + s : s;
	console.log(s);
}

message("Hello",true);
message("Angular");
