$(document).ready(function(){

	function toClass(j){
		return ((j).toString().replace(".", "_"));
	}

	function getValueMatrix(Matrix, v, get){
		return Matrix.get(get.toString()).get((+(v).toFixed(2)).toString())
	};

	// выборка данных
	var l, a2, q, tau, h, count;
	
	l = parseFloat( $('.l').text() );
	a2 = parseFloat( $('.a').text() );
	tau = parseFloat( $('.tau').text() );
	h = parseFloat( $('.h').text() );
	count = parseFloat( $('.layer').text() );












	var canvas = $('.graph')[0],
	ctx = canvas.getContext('2d');

	ctx.fillStyle = "rgba(226,233,244, 0.5)";
	ctx.fillRect (0, 0, 640, 470); // 640*470

	function drawline(ctx, x1, y1, x2, y2) {
		// x` = x0 + a;
		// y` = y0 + b;
		var a = 320, b = 235;

		x1 = x1 + a;
		x2 = x2 + a;

		y1 = -y1 + b;
		y2 = -y2 + b;

		ctx.beginPath();

		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);

		ctx.stroke();
	}

	function toPoint(ctx, x1, y1){
		var a = 320, b = 235;

		x1 = x1 + a;
		y1 = -y1 + b;
	
		ctx.lineTo(x1, y1);
	}


	function drawtext(ctx, x1, y1, text, size) {
		size = size || 16;
		var a = 320, b = 235;

		x1 = x1 + a;
		y1 = -y1 + b;

		ctx.font = size+"px Ubuntu";
		ctx.fillStyle = "black";
		ctx.width = 120;
		ctx.fillText(text, x1, y1); 
	}

	drawline(ctx, 0, -235, 0, 235); // ось x
		
		for(i = -10; i <= 290; i = i + 50) 
		drawtext(ctx, i, -10, (i+10)/100, 10);
		

		drawline(ctx, 0, 235, -5, 225); 
		drawline(ctx, 0, 235, 5, 225);
		drawtext(ctx, 10, 220, "\u03C4, \u00B0C");

	drawline(ctx, -320, 0, 320, 0); // ось y
		drawline(ctx, 310, 5, 320, 0); 
		drawline(ctx, 310, -5, 320, 0);
		drawtext(ctx, 290, -30, "t, с.");

		for(i = -260; i <= 290; i = i + 50) {
			if (i != -10) drawtext(ctx, 5, i, (i+10)/100, 10);
		}
		









	
	q = function(x){
		var PI = Math.PI,
			cos = function(arg){return Math.cos(arg);},
			sin = function(arg){return Math.sin(arg);},
		 	f = 4 * sin( 2 * PI * x) * cos( PI * x ) * cos( PI * x );

		return (+f.toFixed(2)) + 0;
	}

	
	var Matrix = new Map(),
		line,
		i = 0, 
		j = 0,
		colspan = 0,
		tdh = "";
		eps = 3;

	var newcount = 0; for (i=1; i < count; i++) newcount+=tau; // количество слоев

	
	while (j <= newcount) {
		line = new Map();

		$('.table-bordered').append("<tr class='t"+toClass(j)+"'><td class='success'>"+j+"</td></tr>");
		i = 0;

		ctx.beginPath();
		ctx.lineJoin = "round";
		ctx.moveTo(320, 235); // 0 - 0

		while (i <= l) {
			
			if (j == 0) {
				colspan++;
				line.set(i.toString(), q(i)); // нулевой слой

				toPoint(ctx, i*100, q(i)*10); ctx.strokeStyle = "red";
		
				tdh += "<td>" + i + "</td>";
				$('.t'+toClass(j)).append("<td>"+ q(i) +"</td>");
			} else {

				if (i == 0) {
					// на концах одинаковые значения
					line.set(i.toString(), q(i));
					$('.t'+((j).toString().replace(".", "_"))).append("<td>"+ q(i) +"</td>");
					

				} else if (i == l) {
					// на концах одинаковые значения
					line.set(i.toString(), q(i));
					$('.t'+toClass(j)).append("<td>"+ q(i) +"</td>");
					
				} else {

					var get = +(j - tau).toFixed(eps),
						prev = getValueMatrix(Matrix, (i-h), get),
						now = getValueMatrix(Matrix, i, get),
						next = getValueMatrix(Matrix, (i+h), get),
						x = +(   (( a2 * tau * (next-2*now+prev)) / (h*h)) + now   ).toFixed(2);

						line.set(i.toString(), x);



					var war = "";
					if (Math.abs(x) > 50) war = "warning";
					else {
						
						if (j == 0.01) {
							if (Math.abs(x*500) < 320 ) {
								xi = +(x*100).toFixed(0);
								ii = +(i*100).toFixed(0);
								toPoint(ctx, ii, xi); ctx.strokeStyle = "green";
								//console.log(+(i*100).toFixed(0) + ":" + (+(x*100).toFixed(0)));
							}
							
						}

						
					}

					$('.t'+toClass(j)).append("<td class='"+war+"' title='"+x+"'><span class='value'>"+x+"</span></td>");

				}
				
			}

		
			i += h;
			i = +i.toFixed(eps);

		}

		ctx.stroke();

		Matrix.set(j.toString(), line);
		
		j += tau;
		j = +j.toFixed(eps);

	}

	$('.table-bordered').prepend(
		"<tr class='info'><td rowspan='2'><b>&tau;,&deg;С </b></td><td class='noalign' colspan='"
		+(colspan)+"'><b>h, сек</b></td><tr class='success'>"+tdh+"</tr></tr>");


});