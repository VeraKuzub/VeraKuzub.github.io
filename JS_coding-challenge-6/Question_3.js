// Question 3: 
// Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function length (string){
	return string.length;
}

function convertRGB (rgbColor){
	var colorHEX = "#";
	var color = rgbColor.replace(/rgb|\(|\)|\s/gi,'')
						.replace(/\,/gi,' ')
						.split(" ");
	for (var i=0; i < length(color); i++){
		color[i] = parseInt(color[i]).toString(16);
		colorHEX += color[i];
	} return (colorHEX);
}



function convertHex(hexColor){
	var color = hexColor.slice(1);
	var rgbColor;
		if (length(color) === 3){
		rgbColor = "rgb(" + 
		parseInt(color[0] + color[0], 16) + ", "+
		parseInt(color[1] + color[1], 16) + ", " +  
		parseInt(color[2] + color[2], 16) +")";
		return rgbColor;
	} else if (length(color) === 6){
		var re = /(.{2}|.)/g;
		var colorArr = color.match(re);
		rgbColor = "rgb(" + 
		parseInt(colorArr[0], 16) + ", "+
		parseInt(colorArr[1], 16)+ ", " +
		parseInt(colorArr[2], 16) +")";
		return rgbColor;
} else return console.log ("Please enter correct HEX color format. Examples: #fff or #ffffff.");
}

function convertColor (color){
	color = color.toLowerCase();
		if (color.search("#") !== -1){
			return convertHex(color);
		} else if ((color.search("rgb") !== -1)){
			return convertRGB(color);
} return console.log ("Please enter correct RGB or HEX color format. Examples: RGB(255,255,255), #ffffff or #fff");
}

convertColor("rgb(255, 255, 255)");
convertColor("#000000");
convertColor("#fff");