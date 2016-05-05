$(document).ready(function(){

	function toClass(j){
		return ((j).toString().replace(".", "_"));
	}

	function getValueMatrix(Matrix, v){
		return Matrix.get(get.toString()).get((+(v).toFixed(2)).toString())
	};

	// выборка данных
	var l, a2, q, tau, h, count;
	
	l = parseFloat( $('.l').text() );
	a2 = parseFloat( $('.a').text() );
	tau = parseFloat( $('.tau').text() );
	h = parseFloat( $('.h').text() );
	count = parseFloat( $('.layer').text() );

	q = function(x){
		var PI = Math.PI,
			cos = function(arg){return Math.cos(arg);},
			sin = function(arg){return Math.sin(arg);},
		 	f = 6 * sin( 2 * PI * x) - 4* sin( PI * x ) * sin( PI * x ) * sin( 2 * PI * x );

		return (+f.toFixed(2)) + 0;
	}

	var canvas = $('.graph')[0],
	ctx = canvas.getContext('2d');

	ctx.fillStyle = "rgba(226,233,244, 0.5)";
	ctx.fillRect (0, 0, 640, 470); // 640*470

	drawline(ctx, 0, -235, 0, 235); // ось x
		
		for(i = -10; i <= 190; i = i + 50) 
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


	// расчет точек

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
				line.set(i.toString(), 0); // нулевой слой
				tdh += "<td>" + i + "</td>";
				$('.t'+toClass(j)).append("<td>"+ 0 +"</td>");
				toPoint(ctx, i*100, 0); ctx.strokeStyle = "red";
			} else if (j == 0.01) {
				
				if (i == 0) {
					// на концах одинаковые значения
					line.set(i.toString(), 0);
					$('.t'+((j).toString().replace(".", "_"))).append("<td>"+ 0 +"</td>");
					toPoint(ctx, i*100, 0); ctx.strokeStyle = "red";
					
				} else if (i == l) {
					// на концах одинаковые значения
					line.set(i.toString(), 0);
					$('.t'+toClass(j)).append("<td>"+ 0 +"</td>");
					toPoint(ctx, i*100, 0); ctx.strokeStyle = "red";
				}
				 else {
				 	val = +(tau * q(i) + i).toFixed(2);
				 	line.set(i.toString(), val);
				 	$('.t'+((j).toString().replace(".", "_"))).append("<td>"+ val +"</td>");
				 	toPoint(ctx, i*100, val*10); ctx.strokeStyle = "red";
				 }
				
			} else {

				if (i == 0) {
					// на концах одинаковые значения
					line.set(i.toString(), 0);
					$('.t'+((j).toString().replace(".", "_"))).append("<td>"+ 0 +"</td>");
					
				} else if (i == l) {
					// на концах одинаковые значения
					line.set(i.toString(), 0);
					$('.t'+toClass(j)).append("<td>"+ 0 +"</td>");

				} else {
					console.log(i)

					var j_minus1 = (+(j - tau).toFixed(eps)).toString();
					var j_minus2 = (+(j - tau - tau).toFixed(eps)).toString();
					var i_minush = (+(i-h).toFixed(eps)).toString();
					var i_ = (+(i).toFixed(eps)).toString();
					var i_plush = (+(i+h).toFixed(eps)).toString();

					var ui = Matrix.get(j_minus1).get(i_);
					var uk = Matrix.get(j_minus1).get(i_plush);
					var up = Matrix.get(j_minus1).get(i_minush);

					var uj = Matrix.get(j_minus2).get(i_);
					x = ((tau*tau) * ((uk - 2*ui + up) / (h * h))) + (2*ui - uj);
					x = +(x).toFixed(2);

					line.set(i.toString(), x);
					$('.t'+toClass(j)).append("<td>"+ x +"</td>");

					toPoint(ctx, i*100, x*10); ctx.strokeStyle = "green";

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