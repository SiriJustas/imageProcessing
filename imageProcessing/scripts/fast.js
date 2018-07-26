function fast(taskai, x, y){
	var pix = taskai;
	var height = pix.length;
	var width = pix[0].length;
	var segmentas = [];
	var tkoef = 5;
	var tempx = x;
	var tempy = y;
	var koef = pix[tempy][tempx];
	if(x>2 && y>2 && x<width-3 && y<height-3){
		segmentas[0] = pix[tempy-3][tempx];
		segmentas[1] = pix[tempy-3][tempx+1];
		segmentas[2] = pix[tempy-2][tempx+2];
		segmentas[3] = pix[tempy-1][tempx+3];
		segmentas[4] = pix[tempy][tempx+3];
		segmentas[5] = pix[tempy+1][tempx+3];
		segmentas[6] = pix[tempy+2][tempx+2];
		segmentas[7] = pix[tempy+3][tempx+1];
		segmentas[8] = pix[tempy+3][tempx];
		segmentas[9] = pix[tempy+3][tempx-1];
		segmentas[10] = pix[tempy+2][tempx-2];
		segmentas[11] = pix[tempy+1][tempx-3];
		segmentas[12] = pix[tempy][tempx-3];
		segmentas[13] = pix[tempy-1][tempx-3];
		segmentas[14] = pix[tempy-2][tempx-2];
		segmentas[15] = pix[tempy-3][tempx-1];
		var check=0;
		for(var h= 0; h<16; h+=4){
			if(segmentas[h]>koef+tkoef||segmentas[h]<koef-tkoef){
				check++;
			}
			else{
			}
		}
		if(check<2){
			return false;
		}
		else{
			return true;
		}

	}
	else{
		if(x>0 && y >0 && x<width-1 && y<height-1){
			segmentas[0] = pix[tempy-1][tempx];
			segmentas[1] = pix[tempy][tempx+1];
			segmentas[2] = pix[tempy+1][tempx];
			segmentas[3] = pix[tempy][tempx-1];
			var check=0;
			for(var h= 0; h<4; h+=1){
				if(segmentas[h]>koef+tkoef||segmentas[h]<koef-tkoef){
					check++;
				}
				else{
				}
			}
			if(check<2){
				return false;
			}
			else{
				return true;
			}
		}
		else{
			return false;
		}
	}

}