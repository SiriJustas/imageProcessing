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