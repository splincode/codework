$(document).ready(function(){

	// выборка данных
	var l, a, q, tau, h;
	
	l = parseFloat( $('.l').text() );
	a = Math.sqrt( parseFloat( $('.a').text() ) );
	tau = parseFloat( $('.tau').text() );
	h = parseFloat( $('.h').text() );
	q = function(x){
		return 4 * Math.sin(2 * x * Math.PI) * Math.cos(Math.PI * x) * Math.cos(Math.PI * x);
	}

	//alert(q(100))


});