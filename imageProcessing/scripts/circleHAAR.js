function verticalHAAR(h,s){
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
			if(j<parseInt((hei-size)/2) || (j>size+parseInt(((hei-size)/2))&&j<hei)){
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