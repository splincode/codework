$(document).ready(function(){

	// выборка данных
	var l, a, q, tau, h;
	
	l = parseFloat( $('.l').text() );
	a = Math.sqrt( parseFloat( $('.a').text() ) );
	tau = parseFloat( $('.tau').text() );
	h = parseFloat( $('.h').text() );
	q = function(x){
		var PI = Math.PI;
		var cos = function(arg){return Math.cos(arg);}
		var sin = function(arg){return Math.sin(arg);}

		var f = 4*sin(2*PI*x)*cos(PI*x)*cos(PI*x);

		return +f.toFixed(4);
	}

	//alert(q(0.0001));



	// Canvas
	var canvas = $('.graph')[0],
	ctx = canvas.getContext('2d');

	// layer1
	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fillRect (0, 0, canvas.width, canvas.height);



	        
	        //ctx.fillRect (10, 10, 55, 50);

	        //ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	        //ctx.fillRect (30, 30, 55, 50);


});