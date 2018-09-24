// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function sortArray(array){
array = array.sort(function(a, b){return a - b});
var arrayLength = array.length;
var newArray=[];
var myChunk =[];
var j = 0;
var c = 0;
for (var i = 0; i<arrayLength; i++){
	if (array[i]===array[i+1]){
		myChunk[c]=array[i];
		c++;
	} else if (array[i]!==array[i+1]){
		myChunk[c] = array[i];
		newArray[j] = myChunk;
		j++;
		c=0;
		myChunk =[];
	}
} return (newArray);
}

var array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
sortArray(array);

var array2 = [1,1,2,"2","3","2","3",4,4];
sortArray(array2);