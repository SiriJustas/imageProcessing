function rgbToGrayScale(rgb){
	var grayscale = [];
	for(var i=0; i<rgb.length; i++){
		var temp = [];
		for(var j = 0; j<rgb[i].length; j++){
			temp[j] = ((rgb[i][j].red*0.3)+(rgb[i][j].green*0.59)+(rgb[i][j].blue*0.11));
		}
		grayscale[i] = temp;
	}
	return grayscale;
}