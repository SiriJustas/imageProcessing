function read(){
	var pav = document.createElement('img');
	pav.crossOrigin = "Anonymous";
	pav.setAttribute('src','https://i.imgur.com/yBRNAO8.jpg');
	document.body.appendChild(pav);
	// https://i.imgur.com/RRBuV8L.gif?1
	//https://i.imgur.com/lDM3nvP.jpg
	//console.log(pav);
	var width = 0 ;
	var height = 0;
	var canvass = document.getElementById("canvasas");
	var ctx = canvass.getContext("2d");;
	var pix = [];
	//var red = [];
	//var green = [];
	//var blue = [];
	//var alpha = [];
	//var wholar = [];
	//var wholag = [];
	//var wholab = [];
	//var wholaa = [];
	//var most;
	//var r,g,b;
	/*
	for(var i =0; i<256; i++){
		wholar[i]=0;
		wholag[i]=0;
		wholab[i]=0;
		wholaa[i]=0;
	}
	*/
	/*
	var whola = [];
	for(var l = 0; l<256; l++){
		var whola2 = [];
		for(var k =0; k<256; k++){
			var whola3 = [];
			for(var i =0; i<256; i++){
				whola3[i] = 0;
			}
			whola2[k]=whola3;
		}
		whola[l] = whola2;
	}
	*/
	pav.addEventListener("load", function() {

		width = pav.naturalWidth;
		height = pav.naturalHeight;
		//console.log(width);
		//console.log(height);
		canvass.width = width;
		canvass.height = height;
		ctx.drawImage(pav,0,0,width,height);
		ctx = canvass.getContext("2d");
		for(var a = 0; a<height; a++){
			var rowR = [];
			var rowG = [];
			var rowB = [];
			var rowA = [];
			var pix2 = [];
			for(var p = 0; p<width; p++){
				var imageData=ctx.getImageData(p,a,1,1);
				//rowR[p] = imageData.data[0];
				//rowG[p] = imageData.data[1];
				//rowB[p] = imageData.data[2];
				//rowA[p] = imageData.data[3];
				var objektas = {
					red: imageData.data[0], 
					green: imageData.data[1], 
					blue: imageData.data[2], 
					alpha: imageData.data[3], 
					ya: a,
					xa: p,
				}
				pix2[p]=objektas;
				//whola[imageData.data[0]][imageData.data[1]][imageData.data[2]]++;
				//wholar[imageData.data[0]]++;
				//wholag[imageData.data[1]]++;
				//wholab[imageData.data[2]]++;
				//wholaa[imageData.data[3]]++;
				//console.log(red = imageData.data[0]);
			}
			//red[a] = rowR;
			//green[a] = rowG;
			//blue[a] = rowB;
			//alpha[a] = rowA;
			pix[a]=pix2;
		}
	});
		//console.log(pikseliai);
		//most = whola[0][0][0];
		//r=0;
		//g=0;
		//b=0;
	/*
		for(var i =0; i<256; i++){
			for(var j = 0; j<256; j++){
				for(var k = 0; k<256; k++){
					if(whola[i][j][k]>most){
						most = whola [i][j][k];
						r=i;
						g=j;
						b=k;
					}
				}
			}
		}
	*/
	return pix;
}