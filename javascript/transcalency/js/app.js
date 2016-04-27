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

		while (i <= l) {

			if (j == 0) {
				colspan++;
				line.set(i.toString(), q(i)); // нулевой слой

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
						prev = getValueMatrix(Matrix, (i-h)),
						now = getValueMatrix(Matrix, i),
						next = getValueMatrix(Matrix, (i+h)),
						x = +(   (( a2 * tau * (next-2*now+prev)) / (h*h)) + now   ).toFixed(2);

						line.set(i.toString(), x);

					var war = "";
					if (Math.abs(x) > 50) war = "warning";

					$('.t'+toClass(j)).append("<td class='"+war+"' title='"+x+"'><span class='value'>"+x+"</span></td>");

				}
				
			}


			i += h;
			i = +i.toFixed(eps);

		}

		Matrix.set(j.toString(), line);
		
		j += tau;
		j = +j.toFixed(eps);

	}

	$('.table-bordered')
		.prepend("<tr class='info'><td rowspan='2'><b>&tau;,&deg;С </b></td><td class='noalign' colspan='"+(colspan)+"'><b>h, сек</b></td><tr class='success'>"+tdh+"</tr></tr>");

	

	//console.log(Matrix);

	// Canvas
	/* 
		var Canvas = {
			Selector: "#example",
			Orientation: "classic",
			Window: {
				Rectangle: { // базовый слой
					Background: "rgba(117, 174, 250, 0.5)",
					MarginTop: 0,
					MarginLeft: 0,
					Width: parent.width,
					Height: parent.height
					Zindex: 0
				},

				Straight: {
					X: 0,
					Y: 0,
					Width: 1,
					Height: parent.height - 50,
					MarginLeft: 20,
					MarginTop: 25,

					Item1: {
						Width: 1,
						Height: 20,
						Incline: "left",
						Deg: 4 // по X - 10,
						ItemText: { // x и y относительные Item
							FontSize: 15,
							Text: "&#932",
							Color: "black",
							FontFamily: "Ubuntu",
							Width: 100,
							TextAlign: "center"
						}
					},

					Item2: {
						Width: 1,
						Height: 20,
						Incline: "right",
						Deg: 4 // по X + 10
					},
				},

				Straight: {
					X: 0,
					Y: parent.height - 50,
					Width: parent.width,
					Height: 1,
					MarginLeft: 20,
					MarginTop: 25,

					****
				}

				

			}
		};

		Zindex.show(Canvas);
	*/

	var canvas = $('.graph')[0],
	ctx = canvas.getContext('2d');

	// layer1
	ctx.fillStyle = "rgba(226,233,244, 0.5)";
	ctx.fillRect (0, 0, canvas.width, canvas.height);

	// line1
	ctx.beginPath();
	ctx.moveTo(20, 55);
	ctx.lineWidth = 1;
	ctx.lineTo(20, canvas.height-30);
	ctx.stroke();

	// item
	ctx.beginPath();
	        //  x  y
	ctx.moveTo(20, 55);
	ctx.lineWidth = 1;
	ctx.lineTo(16, 75);
	ctx.stroke();

	// item
	ctx.beginPath();
	        //  x  y
	ctx.moveTo(20, 55);
	ctx.lineWidth = 1;
	ctx.lineTo(24, 75);
	ctx.stroke();

	ctx.font = "16px Ubuntu";
	ctx.fillStyle = "black";
	ctx.width = 120;
	ctx.fillText("\u03C4, \u00B0C", 16, 45); // 0 + x, 0 + y

	// line2
	ctx.beginPath();
	ctx.moveTo(5, canvas.height-50);
	ctx.lineWidth = 1;
	ctx.lineTo(canvas.width-30, canvas.height-50);
	ctx.stroke();

	// item3
	ctx.beginPath();
	ctx.moveTo(canvas.width-30, canvas.height-50);
	ctx.lineWidth = 1;
	ctx.lineTo(canvas.width-45, canvas.height-40);
	ctx.stroke();

	// item4
	ctx.beginPath();
	ctx.moveTo(canvas.width-30, canvas.height-50);
	ctx.lineWidth = 1;
	ctx.lineTo(canvas.width-45, canvas.height-60);
	ctx.stroke();

	ctx.font = "16px Ubuntu";
	ctx.fillStyle = "black";
	ctx.width = 120;
	ctx.fillText("t, с.", canvas.width-40, canvas.height-20); // 0 + x, 0 + y


});