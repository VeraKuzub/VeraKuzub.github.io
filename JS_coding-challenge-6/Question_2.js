// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

function targetNumber (array, number){
	newArray = [];
	for (var j=0; j<array.length;j++) {
		for(var i=1; i<array.length;i++){
		if ((array[j]+array[i])===number) {
			newArray.push(array[j]);
			newArray.push(array[i]);
			return newArray;
		}
	} 
	} return console.log("There are no answer");
}

targetNumber([1,2,3], 4);