console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener(
	'click',

	() => {
		alert('Successful!');
	}
);

//let picture = document.getElementById("#picture");

//picture.addEventListener("mouseover", () => {
//  alert("You are strong!")
//  , false);