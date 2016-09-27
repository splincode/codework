$(function(){

	// решить судоку
	$('.btn-success').on("click", function(){
		

		var i = 1;
		var in_val = [];
		var line = [];

		$('td').each(function(){
			
			line.push(parseInt($(this).find('input').val().trim()) || 0);

			if (i < 9) {	
				i++;
			} else {
				in_val.push(line);
				line = [];
				i = 1;
			}

		    
		});

		var sudoku = new Sudoku(in_val);
		$('.sudoku').html(sudoku.html());

	});

	// очистить поле
	$('.btn-link').on("click", function(){
		$('input').val("");
		$('td').removeClass();
	});

}());