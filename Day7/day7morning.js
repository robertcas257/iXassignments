var first_name = document.getElementById("first");
var last_name = document.getElementById("last");
var c_Button = document.getElementById("color-btn");
var changeColor_var = document.getElementById("color-div");
var i_Button = document.getElementById("image-btn");
var lightbox = document.getElementById("lightbox");

function getFormValues() {
	console.log(first_name.value + " " + last_name.value);
}

c_Button.onclick = function() {
	changeColor();
}

function changeColor() {
	changeColor_var.classList.add('changeColor_class');
}

function toggleImage() {
	document.getElementById("lightbox").classList.add("isVisible"); 
}

var removeImg = function() {
	document.getElementById("lightbox").classList.remove("isVisible");
}

lightbox.onclick = function() {
	removeImg();
}

i_Button.onclick = function() {
	toggleImage();
}


document.getElementById("name-btn").onclick = function() {
	getFormValues();
};