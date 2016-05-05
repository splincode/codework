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