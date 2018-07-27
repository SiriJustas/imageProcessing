function gen(pi, blu, gra, bi){
	var pix = pi;
	var blur = blu;
	var gray = gra;
	var bin = bi;



	for(var i=20; i<pixBinary.length-20; i++){
		for(var j=20; j<pixBinary[i].length-20; j++){
			for(var i2=-4, i3=0; i2<parseInt(attribute.length/2)+1; i2++, i3++){
				for(var j2=-4, j3=0; j2<parseInt(attribute[i3].length/2)+1; j2++, j3++){
					if(pixBinary[i+i2][j+j2]==attribute[i3][j3] && pixBinary[i+i2][j+j2]==attribute[i3][j3]){
						//if(pixCopy[i][j].red>pixCopy[i][j].green&&pixCopy[i][j].red>pixCopy[i][j].blue){
							check++;
						//}
					}
				}
			}
		}
	}



}



function horizontalHAAR(tas,h,s){
	var pix = tas;
	var hei = h;
	var size = s;
	var res = [];
	var check = 0;
	var result = [];
	var resIndex=0;

	if(hei%2==0){
		hei+=1;
	}
	if(size%2!=0){
		size+=1;
	}
	for(var i=0; i<hei; i++){
		var p = [];
		for(var j=0; j<hei; j++){
			if(i<parseInt((hei-size)/2) || (i>size+parseInt(((hei-size)/2))&&i<hei)){
				p[j]=255;
			}
			else{
				p[j]=0;
			}
		}
		res[i]=p;
	}
	//console.log(res);
	return res;
}