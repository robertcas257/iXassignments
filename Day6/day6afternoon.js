
// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
	var string1 = sentence.split("").sort().join("").trim();
	for (var i=0; i <string1.length; i++) {
		for (var j= i+1; j < string1.length; j++) {
			if (string1[i] === string1[j]) {
				return 'no';
			}
		}
	}
	return 'yes';
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var sortMyShit = numbers.sort(function(a, b){return a-b});
	for (var i=0; i <sortMyShit.length; i++) {
		if (i+1 !== sortMyShit[i]) {
			return i+1;
		}
	}
}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	string1 = array1.join("");
	string1 = string1 + string1;
	if (string1.length !== string2.length) {
		return 'no';
	}

	string2 = array2.join("");
	if (string1.includes(string2)) {
		return 'yes';
	}
	return 'no';
}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function nPrimeNums(n) {
	var currCount = 2;
	var primeNums = 0;
	var string = ""; 
	while (primeNums < n) {
		if(isPrime(currCount) === true) {
			primeNums++;
			string+= currCount + ",";
		}
		currCount++;
	}
	return string.substr(0, string.length -1);

}

function isPrime(x) {
	for (i=2; i < x; i++) {
		if (x % i === 0) {
			return false;
		}
	}
	return true;
}

// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {
	var a = f() + f();
	return a;
}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {
    	first_name: first, 
    	last_name: last, 
    	age: age,
    	email: email, 
    	fav_color: color

    }
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {
	return obj.children.length;

}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {
	return greet(first + " " + last);

}