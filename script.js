loadBreeds();
async function loadBreeds() {
	let res = await fetch("https://dog.ceo/api/breeds/list/all");
	let data = await res.json();
	let breeds = Object.keys(data.message);

	breeds.forEach((breed) => {
		document.querySelector("#breed").innerHTML += `<option>${breed}</option>`;
	});
}

let button = document.querySelector("button");
button.addEventListener("click", loadDogs);
function loadDogs(e) {
	let selectedBreed = document.querySelector("#breed").value;
	let selectedQty = document.querySelector("#qty").value;
	fetch(
		`https://dog.ceo/api/breed/${selectedBreed}/images/random/${selectedQty}`
	)
		.then((res) => res.json())
		.then((data) => {
			let display = document.querySelector("#display");
			display.innerHTML = "";
			let msg = data.message;
			msg.forEach((dog) => {
				display.innerHTML += `<div><img src="${dog}" /></div>`;
			});
		})
		.catch(() => console.log("Failed"));
	e.preventDefault();
}
// async function newLoadDogs(e) {
// 	let selectedBreed = document.querySelector("#breed").value;
// 	let selectedQty = document.querySelector("#qty").value;
// 	let display = document.querySelector("#display");

// 	let res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${selectedQty}`);
// 	let data = await res.json();
// 	let msg = await data.message;

// 	display.innerHTML = "";
// 	msg.forEach((dog) => {
// 		display.innerHTML += `<div><img src="${dog}" /></div>`;
// 	});

// 	e.preventDefault();
// }