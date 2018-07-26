function integralImage(taskai){
	var pix = taskai;
	var integralImageR = [];
	for(var i=0; i<taskai.length; i++){
		var integralImageLine = [];
		for(var j=0; j<taskai[i].length; j++){
			if(j==0 && i == 0){
				integralImageLine[j]=pix[i][j];
			}
			else{
				if(i>0){
					if(j==0){
						integralImageLine[j] = integralImageR[i-1][j];
						integralImageLine[j] += pix[i][j];
					}
					else{
						integralImageLine[j] = integralImageR[i-1][j];
						for(var temp = j; temp>=0; temp--){
							integralImageLine[j] += pix[i][temp];
						}
					}
				}
				else{
					integralImageLine[j]=pix[i][j];
					integralImageLine[j]+=integralImageLine[j-1];
				}
			}
			//optimization
			integralImageLine[j]=(integralImageLine[j]/255+0.1).toFixed(5)-0.1;
		}
		integralImageR[i]=integralImageLine;
	}
	return integralImageR;
}