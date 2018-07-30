function drawPlus(cont,x,y){
	var ctx = cont;
	ctx.save();
	ctx.beginPath();
	ctx.globalAlpha = 1;
	//ctx.strokeStyle="#FF0000";
	ctx.strokeStyle=generateHEX();
	ctx.moveTo(x,y);
	ctx.lineTo(x+3,y);
	ctx.moveTo(x,y);
	ctx.lineTo(x,y+3);
	ctx.moveTo(x,y);
	ctx.lineTo(x-3,y);
	ctx.moveTo(x,y);
	ctx.lineTo(x,y-3);
	ctx.stroke();
	ctx.restore();
}
function drawSquare(ct,xx,yy,w,h){
	var ctx = ct;
	var x = xx;
	var y =  yy;
	var width = w;
	var height = h;
	ctx.save();
	ctx.strokeStyle="#FF0000";
	ctx.rect(x,y,w,h);
	ctx.stroke();
	ctx.restore();
}
function generateHEX(){
    var first = Math.floor(Math.random() * 16);
    var second = Math.floor(Math.random() * 16);
    var third = Math.floor(Math.random() * 16) ;
    var fourth = Math.floor(Math.random() * 16);
    var fifth = Math.floor(Math.random() * 16);
    var sixth = Math.floor(Math.random() * 16);
    var s = '#'+symbol(first)+symbol(second)+symbol(third)+symbol(fourth)+symbol(fifth)+symbol(sixth);
        return s
}
function symbol(sym){
	var sk = sym;
	var b;
	switch(sk){
	   	case 0:
	    	b = '0';
	    	break;
	    case 1: 
	        b = '1';
	        break;
	    case 2: 
	        b = '2';
	        break;
	    case 3: 
	        b = '3';
	        break;
	    case 4: 
	        b = '4';
	        break;
	    case 5: 
	        b = '5';
	        break;
	    case 6: 
	        b = '6';
	        break;
	    case 7: 
	        b = '7';
	        break;
	    case 8: 
	        b = '8';
	        break;
	    case 9: 
	        b = '9';
	        break;
	    case 10: 
	        b = 'A';
	        break;
	    case 11: 
	        b = 'B';
	        break;
	    case 12: 
	        b = 'C';
	        break;
	    case 13: 
	        b = 'D';
	        break;
	    case 14: 
	        b = 'E';
	        break;
	    case 15: 
	        b = 'F';
	        break;
	    default:
	       	break;
	}
	return b;
}