$(document).ready(function(){
	
	// указываем размерность поля
	$('#xystate').on('click', function(){

		x = parseFloat( $("#x").val() ) || parseFloat( $("#x").attr('placeholder') );
		y = parseFloat( $("#y").val() ) || parseFloat( $("#y").attr('placeholder') );

		// скрываем модальное окно 
		$('.modali').fadeOut();

		// формируем поле
		var row = "", col = ""; 
		for(i = 1; i <= x; ++i) row += "<td class='i_"+i+"'></td>\n";
		for(j = 1; j <= y; ++j) col += "<tr class='j_"+j+"'>"+row+"</tr>\n";
		
		$('.table').attr({'x': x, 'y': y}).html(col);

		$('.table td').on('click', function(){
			if ( $(this).hasClass('live') ) $(this).removeClass('live');
			else $(this).addClass('live');
		})

		return false;
	});

	var classicgame = function(e){

		$('.table').attr('stop', 'false'); // состояние игрового поля 
		$('.clear').fadeOut();

		var x = parseFloat( $('.table').attr('x') );
		var y = parseFloat( $('.table').attr('y') );
		var countneighbors = 0; // количество живых соседей у клетки
		var timeout = parseFloat( $('.timeout').val() ) / 1000;
		var E, NE, N, NW, W, SW, S, SE;
		var i = 0, j = 1; 


		var clearId = setInterval(function(){
			if (i != x) {
				i = i + 1;
			} else {
				i = 1;
				j = j + 1;
			}

			// ----------------------
			// анализируем соседей
			// если можно анализировать поле
			if ( (i+1) <= x ) E = $('.table tr.j_' + j + ' td.i_' + (i+1) ).hasClass('live');
			if (E) countneighbors++; // сосед на востоке

			if ( (j-1) >= 1 && (i+1) <= x ) NE = $('.table tr.j_' + (j-1) + ' td.i_' + (i+1) ).hasClass('live');
			if (NE) countneighbors++; // сосед на северо-востоке

			if ( (j-1) >= 1 ) N = $('.table tr.j_' + (j-1) + ' td.i_' + i ).hasClass('live');
			if (N) countneighbors++; // сосед на севере

			if ( (j-1) >= 1 && (i-1) >= 1 ) NW = $('.table tr.j_' + (j-1) + ' td.i_' + (i-1) ).hasClass('live');
			if (NW) countneighbors++; // сосед на северо-западе

			if ( (i-1) >= 1 ) W = $('.table tr.j_' + j + ' td.i_' + (i-1) ).hasClass('live');
			if (W) countneighbors++; // сосед на западе

			if ( (i-1) >= 1 && (j+1) <= y ) SW = $('.table tr.j_' + (j+1) + ' td.i_' + (i-1) ).hasClass('live');
			if (SW) countneighbors++; // сосед на юго-западе

			if ( (j+1) <= y ) W = $('.table tr.j_' + (j+1) + ' td.i_' + i ).hasClass('live');
			if (W) countneighbors++; // сосед на юге

			if ( (j+1) <= y && (i+1) <= x ) SE = $('.table tr.j_' + (j+1) + ' td.i_' + (i+1) ).hasClass('live');
			if (SE) countneighbors++; // сосед на юго-востоке

			console.log(countneighbors)

			state = $('.table tr.j_' + j + ' td.i_' + i).hasClass('live');
			if(state){
			// если клетка живая

				if (countneighbors == 3 || countneighbors == 2) {
					//console.log(countneighbors);
					$('.table tr.j_' + j + ' td.i_' + i).attr('state', 'live');
				} else {
					$('.table tr.j_' + j + ' td.i_' + i).attr('state', 'died');
					//$('.table tr.j_' + j + ' td.i_' + i).removeClass('live');
					//console.log('.table tr.j_' + j + ' td.i_' + i + " умер при стольки соседях: " + countneighbors)
				}

			} else {
				// иначе если клетка мертвая
				if (countneighbors == 3) $('.table tr.j_' + j + ' td.i_' + i).attr('state', 'live'); // $('.table tr.j_' + j + ' td.i_' + i ).addClass('live');
			}


			countneighbors = 0;

			// ----------------------

			if (i == x && j == y)  {
				// перерисовываем картину
				for (j=1; j<=y; j++){
					for(i=1; i<=x; i++) {
						state = $('.table tr.j_' + j + ' td.i_' + i).attr('state');
						if (state == 'died') $('.table tr.j_' + j + ' td.i_' + i).removeClass('live');
						else if (state == 'live') $('.table tr.j_' + j + ' td.i_' + i).addClass('live');
					}
				}

				j = 1;
				i = 0;
			} 

			s = $('.table').attr('stop');
			if (s == 'stop') clearInterval(clearId);
		}, timeout);

		e.preventDefault;
		return false;
	};

	var stopgame = function(){
		$('.table').attr('stop', 'stop');
		$('.clear').fadeIn();
	}

	var clearfix = function(){

		var x = parseFloat( $('.table').attr('x') );
		var y = parseFloat( $('.table').attr('y') );

		for (j=1; j<=y; j++){
			for(i=1; i<=x; i++) {
				$('.table tr.j_' + j + ' td.i_' + i).attr('state', '');
				$('.table tr.j_' + j + ' td.i_' + i).removeClass('live');
			}
		}

	}

	// если выбрана классическая игра
	$('.startgame').on('click', classicgame);
	$('.stopgame').on('click', stopgame);
	$('.clear').on('click', clearfix);

});