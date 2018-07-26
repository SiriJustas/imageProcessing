function searchRect(taskai,ct){
	var ctx = ct;
	var pix = taskai;
	var height = taskai.length;
	var width = taskai[0].length;
	var heightSize = parseInt(height/3);
	var heightStep = parseInt(heightSize);
	var widthSize = parseInt(width/3);
	var widthStep = parseInt(widthSize);
	var x1=0,y1=0;
	var x2=heightSize, y2 = widthSize;
	for(var i =0; x2< height; i++){
		y1=0; y2=widthSize;
		for(var j=0; y2 < width; j++){
			console.log(j+"-o stulpelio iteracija");
			if(j==1&&i==0){ //condition for object search
				//OBJECT FOUND
				drawSquare(ctx,y1+70,x1+150,y2-y1,x2-x1);
			}
			else{
				//OBJECT IS NOT FOUND
			}
			y1+=widthStep;
			y2+=widthStep;
		}
		x1+=heightStep;
		x2+=heightStep;
	}
	//console.log(height);
	//console.log(width);

	}