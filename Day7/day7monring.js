var first_name = document.getElementById("first");
var last_name = document.getElementById("last");

function getFormValues() {
	console.log(first_name.value + " " + last_name.value);
}

// nButton.onclick = function() {
// 	console.log(getFormValues());
// }

function changeColor() {
	
}

function toggleImage() {
	
}

document.getElementById("name-btn").onclick = function() {
	getFormValues();
};