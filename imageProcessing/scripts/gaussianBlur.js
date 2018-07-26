function gaussianBlur(taskai){
	var pix = taskai;
	var sigma = 500;
	var size = 15;
	var kernel = gaussianKernel(sigma, size);
	var tempSumR = 0;
	var tempSumG = 0;
	var tempSumB = 0;
	var kernelSize = kernel.length;
	var parsedKernelSize = parseInt(kernelSize/2);
	for(var i =0; i<pix.length; i++){
		for(var j=0; j<pix[i].length; j++){
			tempSum = 0;
			if(i>parsedKernelSize+1 && j>parsedKernelSize+1 && i<pix.length-(1+parsedKernelSize) && j<pix[i].length-(1+parsedKernelSize)){
				for(var h = 0, kernelKoef = -1*parsedKernelSize; h<kernel.length; h++, kernelKoef++){
					for(var h2 = 0, kernelKoef2 = -1*parsedKernelSize; h2<kernel[h].length; h2++, kernelKoef2++){
						tempSumR+=kernel[h][h2]*pix[i-kernelKoef][j-kernelKoef2].red;
						tempSumG+=kernel[h][h2]*pix[i-kernelKoef][j-kernelKoef2].green;
						tempSumB+=kernel[h][h2]*pix[i-kernelKoef][j-kernelKoef2].blue;
					}
				}
				pix[i][j].red = tempSumR;
				pix[i][j].green = tempSumG;
				pix[i][j].blue = tempSumB;
				tempSumR = 0;
				tempSumG = 0;
				tempSumB = 0;
			}
			
		}
	}
	return pix;
	//console.log(kernel);
}

function gaussianBlurForGrayScale(taskai){
	var pix = taskai;
	var sigma = 500;
	var size = 15;
	var kernel = gaussianKernel(sigma,size);
	var tempSumG = 0;
	var kernelSize = kernel.length;
	var parsedKernelSize = parseInt(kernelSize/2);
	for(var i =0; i<pix.length; i++){
		for(var j=0; j<pix[i].length; j++){
			tempSum = 0;
			if(i>parsedKernelSize+1 && j>parsedKernelSize+1 && i<pix.length-(1+parsedKernelSize) && j<pix[i].length-(1+parsedKernelSize)){
				for(var h = 0, kernelKoef = -1*parsedKernelSize; h<kernel.length; h++, kernelKoef++){
					for(var h2 = 0, kernelKoef2 = -1*parsedKernelSize; h2<kernel[h].length; h2++, kernelKoef2++){
						tempSumG+=kernel[h][h2]*pix[i-kernelKoef][j-kernelKoef2];

					}
				}
				pix[i][j] = tempSumG;
				tempSumG = 0;
			}
			
		}
	}
	return pix;
	//console.log(kernel);
}

function gaussianKernel(sgm,sz){
	var sigma = sgm;
	var kernelSize = sz;
	var e = 2.71828182846;
	var kernel = [];
	var kernelSum = 0;
	for(var i =0, y= -1*parseInt(kernelSize/2); i<kernelSize; i++, y++){
		var eil = [];
		for(var j=0, x = -1*parseInt(kernelSize/2); j<kernelSize; j++, x++){
			eil[j] = (1/(2*22/7*Math.pow(sigma,2)))*Math.pow(e,(-1*((Math.pow(x,2)+Math.pow(y,2))/(2*Math.pow(sigma,2)))));	
			kernelSum+=eil[j];
		}
			ernel[i]=eil;
	}
	for(var i =0; i<parseInt(kernelSize/2)+1; i++, y++){
		for(var j=0; j<parseInt(kernelSize/2)+1; j++, x++){
			kernel[i][j]=kernel[i][j]*(1/kernelSum);
		}
	}
	//console.log(kernel);
	return kernel;
}
