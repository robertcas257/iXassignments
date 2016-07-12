//Sort numerically descending order
var numArray = [14, 1, 0, 9, 10, 13, 9]

var myFunction = function(x,y) {
	return y - x;
}

var sortNums = numArray.sort(myFunction);

console.log(sortNums);

//Sort numerically ascending order
var numArray = [14, 1, 0, 9, 10, 13, 9]

var myFunction = function(x,y) {
	return x - y;
}

var sortNums = numArray.sort(myFunction);

console.log(sortNums);

// Sort alphabetically ascending order
var alphArray = ["ass", "asthmas", "artic", "ben", "asthma"];

var alphFunction = function(x,y) {
	for (var i=0; i < Math.min(x.length, y.length); i++) {
		if (x[i] !== y[i]) {
			return x.charCodeAt(i) - y.charCodeAt(i);
		}
	}
	if (y.length < x.length) {
		return 1;
	}
	return 0;
}

var sortAlph = alphArray.sort(alphFunction);
console.log(sortAlph);

// Sort alphabetically descending order
var alphArray = ["ass", "asthmas", "artic", "ben", "asthma"];

var alphFunction = function(x,y) {
	for (var i=0; i < Math.min(x.length, y.length); i++) {
		if (x[i] !== y[i]) {
			return y.charCodeAt(i) - x.charCodeAt(i);
		}
	}
	if (y.length > x.length) {
		return 1;
	}
	return 0;
}

var sortAlph = alphArray.sort(alphFunction);
console.log(sortAlph);

//Sort objects by price ascending order

var arrayObjects = [
	{ 	
		house_key: "a",
		price: "409999"
	},
	{ 	
		house_key: "b",
		price: "600000"
	},
	{ 	
		house_key: "c",
		price: "300000"
	}
];

var arrayObjFunc = function(x,y) {
	return parseInt(x.price, 10) - parseInt(y.price, 10);
}

var sortArrayObj = arrayObjects.sort(arrayObjFunc);
console.log(sortArrayObj);


//Sort objects by price ascending order

var arrayObjects = [
	{ 	
		house_key: "a",
		price: 409999
	},
	{ 	
		house_key: "b",
		price: 600000
	},
	{ 	
		house_key: "c",
		price: 300000
	}
];

var arrayObjFunc = function(x,y) {
	return x.price - y.price;
}

var sortArrayObj = arrayObjects.sort(arrayObjFunc);
console.log(sortArrayObj);

//Get the average of the sums of his 4x4 2d array

var twoDArray = [[1,2,3,3], [4,5,6,6], [7,8,9,9], [10,11,12,12], [10,11,12,12], [10,11,12,12]];


//for the column average
var colSums = function (arr) {
	var currSum = 0;
	var totalSum = 0;
	var len = arr.length;
	var innerLen = arr[0].length;
	for (var i = 0; i < innerLen; i++){
		for (var j = 0; j < len; j++){
			currSum += arr[j][i];
			// console.log(currSum);
		}
		totalSum += currSum;
		currSum = 0;
		// console.log(totalSum);
	}
	return totalSum/innerLen;
}
console.log(colSums(twoDArray) + "is the average of all the col sums");

//for the row average
var colSums = function (arr) {
	var currSum = 0;
	var totalSum = 0;
	var len = arr.length;
	var innerLen = arr[0].length;
	for (var i = 0; i < len; i++){
		for (var j = 0; j < innerLen; j++){
			currSum += arr[i][j];
			// console.log(currSum);
		}
		totalSum += currSum;
		currSum = 0;
		// console.log(totalSum);
	}
	return totalSum/len;
}
console.log(colSums(twoDArray) + "is the average of all the row sums");

//for the sum of all columns
var colSums = function (arr) {
	var currSum = 0;
	var allSums = [];
	var len = arr.length;
	var innerLen = arr[0].length;
	for (var i = 0; i < innerLen; i++){
		for (var j = 0; j < len; j++){
			currSum += arr[j][i];
			// console.log(currSum);
		}
		allSums.push(currSum);
		currSum = 0;
		// console.log(totalSum);
	}
	return allSums;
}
console.log(colSums(twoDArray) + "for all the col sums");

//for the sum of all rows
var colSums = function (arr) {
	var currSum = 0;
	var allSums = [];
	var len = arr.length;
	var innerLen = arr[0].length;
	for (var i = 0; i < len; i++){
		for (var j = 0; j < innerLen; j++){
			currSum += arr[i][j];
			// console.log(currSum);
		}
		allSums.push(currSum);
		currSum = 0;
		// console.log(totalSum);
	}
	return allSums;
}
console.log(colSums(twoDArray) + "for all the row sums");

