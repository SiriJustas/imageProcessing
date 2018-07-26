
function output(imgData){
	var imagedata = imgData;
	var pav = document.getElementsByTagName("img")[0];
	width = pav.naturalWidth;
	height = pav.naturalHeight;
	var canvass2 = document.getElementById("canvasas2");
	var ctx2 = canvass2.getContext("2d");
	canvass2.width = width;
	canvass2.height = height;
	ctx2.putImageData(imagedata, 0, 0);
}