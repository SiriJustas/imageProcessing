
function check(pixs, bin, pixscopy, ct, atr){
	var ctx = ct;
	var pix = pixs;
	var pixCopy = pixscopy;
	var pixBinary = bin;

	var attribute = atr;

	var check = 0;
	var result1 = [];
	var resIndex = 0;
	var near = false;


	for(var i=20; i<pixBinary.length-20; i++){
		for(var j=20; j<pixBinary[i].length-20; j++){
			for(var i2=-1*parseInt(atr.length/2), i3=0; i2<parseInt(attribute.length/2)+1; i2++, i3++){
				for(var j2=-1*parseInt(atr.length/2), j3=0; j2<parseInt(attribute[i3].length/2)+1; j2++, j3++){
					if(pixBinary[i+i2][j+j2]==attribute[i3][j3] && pixBinary[i+i2][j+j2]==attribute[i3][j3]){
						//if(pixCopy[i][j].red>pixCopy[i][j].green&&pixCopy[i][j].red>pixCopy[i][j].blue){
							check++;
						//}
					}
				}
			}
			//console.log(check);
			if(check>attribute.length*attribute.length*0.8){
				if(near==true){
					result1[resIndex-1].wdth+=attribute.length/2;
				}
				else{
					var object = {
						xx: pix[i][j].xa,
						yy: pix[i][j].ya,
						wdth: attribute.length,
						hgth: attribute.length,
					}
					result1[resIndex] = object;
					resIndex++;
					near = false;
				}
			}
			else{
				near=false;
			}
			check=0;
		}
	}
	return result1;
}

