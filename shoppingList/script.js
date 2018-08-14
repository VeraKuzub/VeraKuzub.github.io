// 1. If you click on the list item, it toggles the .done class on and off.
// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 


var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var childOfUl = document.querySelector("ul").children;

 // Function toggleClass toggles the .done class on and off
function toggleClass (){
	this.classList.toggle("done");
}

//remove this and previous Siblings 
function removeSiblings(){
	// this.parentElement.remove();
	this.parentNode.removeChild(this.previousSibling);
	this.parentNode.removeChild(this);
};

//get length of input
function inputLength (){
	return input.value.length;
};

// get length of listItems
function listItemsLength (){
	return listItems.length;
}

// get length of  childs of ul array
function childOfUlLength () {
	return childOfUl.length;
}

function addListAfterClick() {
	if(inputLength() > 0) {
	createListElement();
	}
};

function addListerAfterKeypress(event){
	if (event.keyCode === 13 && inputLength() > 0){
	createListElement();
	}
};

// Create delete button
function createBtnDel(){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.setAttribute("name", "btnDelete");
	button.setAttribute("type", "button");
	button.setAttribute("class", "btn btn-sm btn-outline-danger btnDelete");
	button.addEventListener('click',removeSiblings);
	return button;
};


// Create ListElement with a delete button
function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click',toggleClass);
	ul.appendChild(li);
	li.setAttribute("class", "list-group-item-style");
	input.value = ""; 
	li.parentNode.insertBefore(createBtnDel(), li.nextSibling);
};


//create delete button for each listItems
for (var i = 0; i < listItemsLength(); i++) {
	listItems[i].parentNode.insertBefore(createBtnDel(), listItems[i].nextSibling);
};


//Add event for each child of ul
for (var i = 0; i < childOfUlLength(); i++){
	childOfUl[i].addEventListener('click',toggleClass);
};


buttonEnter.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListerAfterKeypress);