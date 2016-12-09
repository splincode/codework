window.a = null;
window.b = null;
window.c = null;

function result(){


	c = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2)); $('.c').val(c);
	
	let aa = a * 10, bb = b * 10;
	let cc = c * c;
	let tt = (bb/2) + 12;
	let ll = (aa/2) - 10;
	
	$('.rect').css({
		'border-width': `${bb}px ${aa}px 0px 0`,
		'visibility': 'visible'
	});

	$('#rect').remove();

	$(`<style id="rect">
		.rect::after { 
			content: "b";
			position: absolute;
			transform: rotate(90deg);
			top: -${tt}px;
			left: -15px;
		}

		.rect::before {
			position: absolute;
			content: "a";
			transform: rotate(90deg);
			left: ${ll}px;
			bottom: ${bb}px;
		}
	</style>`).appendTo("head");
	
	/* б) */

	$('.tafti').html("");
	
	$('.tafti').css({
		'width': c * 10 +"px",
		'height': c * 10 +"px",
	}).append(
		$('#tRect').clone().addClass('left').css({'left': '-' + (aa/2) + 'px', 'top' : c + 'px'})
	).append(
		$('#tRect').clone().addClass('bottom').css({'bottom': '-' + (bb/2) + 'px', 'left' : c*2 + 'px'})
	).append(
		$('#tRect').clone().addClass('right').css({'right': '-' + (aa/2) + 'px', 'top': c + 'px'})
	).append(
		$('#tRect').clone().addClass('top').css({'top': '-' + (bb/2) + 'px', 'left': c*2 + 'px'})
	)


	/* а) */
	$('#cerc').remove();

	aa = a * a;
	bb = b * b;
	

	$(`<style id="cerc">
		.boxA:before {
			content: "${aa}П";
		} 

		.boxB:before {
			content: "${bb}П";
		} 

		.boxC:before {
			content: "${cc}П";
		}

		.boxA:before, .boxB:before, .boxC:before{
		    
		    position: absolute;
		    top: -25px;
		    color: #000;
		}
	</style>`).appendTo("head");

	


	$('.boxA').css({
		'width': a*a,
		'height': a*a,
	});

	$('.boxB').css({
		'width': b*b,
		'height': b*b,
	});

	$('.boxC').css({
		'width': c*c,
		'height': c*c,
	});

	$('.check').css('opacity', 1)
}


$('.a').blur(function(){

	a = $(this).val() || null;
	$(this).val(a < 0 ? -a : a);

	if (!(isNaN(parseInt(a)) + isNaN(parseInt(b)))) {
		c = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2)); $('.c').val(c);
		result();
	}

});

$('.b').blur(function(){
	b = $(this).val() || null;
	$(this).val(b < 0 ? -b : b);

	if (!(isNaN(parseInt(a)) + isNaN(parseInt(b)))) {
		c = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2)); $('.c').val(c);
		result();
	}

});


$('.c').blur(function(){

	c = $(this).val() || null;
	$(this).val(c < 0 ? -c : c);

});