function output(imgData,ct){
	var imagedata = imgData;
	var pav = document.getElementsByTagName("img")[0];
	width = pav.naturalWidth;
	height = pav.naturalHeight;
	var ctx = ct;
	ctx.putImageData(imagedata, 0, 0);
}
