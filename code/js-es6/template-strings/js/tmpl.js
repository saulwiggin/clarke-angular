
let cars = [
	{ name : "Checker Marathon", image : "checker-marathon.jpg" },
	{ name : "Chevrolet Impala", image : "chevrolet-impala.jpg" },
	{ name : "Cutlass Supreme", image : "cutlass-supreme.jpg" },
	{ name : "Ford Galaxie", image : "ford-galaxie.jpg" },
	{ name : "Grantorino Sport", image : "grantorino-sport.jpg" }
]

function createCar( carObj ) {

	// This multi-line string uses ES6 back-ticks.
	// String interpolation merges in the data.

	let markup = `
		<section class="auto">
			<h2>${ carObj.name }</h2>
			<img src="cars/${ carObj.image }" />
		</section>
	` ;

	document.body.innerHTML += markup;
}

cars.forEach( createCar );
