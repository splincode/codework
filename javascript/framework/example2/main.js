	var Kramer;

	// функция вычисления определителя 3eго порядка по методу треугольника
	function resultdelta(arr){
		return (
			(arr[0][0]*arr[1][1]*arr[2][2]) + 
			(arr[0][1]*arr[1][2]*arr[2][0]) + 
			(arr[0][2]*arr[1][0]*arr[2][1]) - 
			(arr[0][0]*arr[1][2]*arr[2][1]) - 
			(arr[0][1]*arr[1][0]*arr[2][2]) - 
			(arr[0][2]* arr[1][1]*arr[2][0])
		);
	}

	(Kramer = function(){

		// очищаем кеш
		('.itog, .out, .input').css('visibility:hidden;');

		// извлекаем данные из полей
		var a11 = ('.one span:nth-child(1)').html();
		var a12 = ('.one span:nth-child(2)').html(); 
		var a13 = ('.one span:nth-child(3)').html();

		var a21 = ('.two span:nth-child(1)').html(); 
		var a22 = ('.two span:nth-child(2)').html();
		var a23 = ('.two span:nth-child(3)').html();

		var a31 = ('.three span:nth-child(1)').html();
		var a32 = ('.three span:nth-child(2)').html();
		var a33 = ('.three span:nth-child(3)').html();

		var b1 = ('.one span:nth-child(4)').html();
		var b2 = ('.two span:nth-child(4)').html();
		var b3 = ('.three span:nth-child(4)').html();


		// строим массив главного определителя
		var maindelta  = [
			[a11, a12, a13],
			[a21, a22, a23],
			[a31, a32, a33]
		];

		// рисуем главный определитель
		('.maindelta tr:nth-child(1) td:nth-child(2)').html(a11);
		('.maindelta tr:nth-child(1) td:nth-child(3)').html(a12);
		('.maindelta tr:nth-child(1) td:nth-child(4)').html(a13);

		('.maindelta tr:nth-child(2) td:nth-child(1)').html(a21);
		('.maindelta tr:nth-child(2) td:nth-child(2)').html(a22);
		('.maindelta tr:nth-child(2) td:nth-child(3)').html(a23);

		('.maindelta tr:nth-child(3) td:nth-child(1)').html(a31);
		('.maindelta tr:nth-child(3) td:nth-child(2)').html(a32);
		('.maindelta tr:nth-child(3) td:nth-child(3)').html(a33);

		// вычисляем главный определитель и выводим
		var resultmaindelta = resultdelta(maindelta);
		('.maindelta tr:nth-child(1) td:nth-child(6)').html(resultmaindelta);
		
		if (resultmaindelta != 0) {
			// есть решение

			// рисуем главный определитель X
			('.xdelta tr:nth-child(1) td:nth-child(2)').html(b1);
			('.xdelta tr:nth-child(1) td:nth-child(3)').html(a12);
			('.xdelta tr:nth-child(1) td:nth-child(4)').html(a13);

			('.xdelta tr:nth-child(2) td:nth-child(1)').html(b2);
			('.xdelta tr:nth-child(2) td:nth-child(2)').html(a22);
			('.xdelta tr:nth-child(2) td:nth-child(3)').html(a23);

			('.xdelta tr:nth-child(3) td:nth-child(1)').html(b3);
			('.xdelta tr:nth-child(3) td:nth-child(2)').html(a32);
			('.xdelta tr:nth-child(3) td:nth-child(3)').html(a33);

			// строим массив X определителя
			var xdelta  = [
				[b1, a12, a13],
				[b2, a22, a23],
				[b3, a32, a33]
			];

			// вычисляем X определитель и выводим
			var resultxdelta = resultdelta(xdelta);
			('.xdelta tr:nth-child(1) td:nth-child(6)').html(resultxdelta);

			// рисуем главный определитель Y
			('.ydelta tr:nth-child(1) td:nth-child(2)').html(a11);
			('.ydelta tr:nth-child(1) td:nth-child(3)').html(b1);
			('.ydelta tr:nth-child(1) td:nth-child(4)').html(a13);

			('.ydelta tr:nth-child(2) td:nth-child(1)').html(a21);
			('.ydelta tr:nth-child(2) td:nth-child(2)').html(b2);
			('.ydelta tr:nth-child(2) td:nth-child(3)').html(a23);

			('.ydelta tr:nth-child(3) td:nth-child(1)').html(a31);
			('.ydelta tr:nth-child(3) td:nth-child(2)').html(b3);
			('.ydelta tr:nth-child(3) td:nth-child(3)').html(a33);

			// строим массив X определителя
			var ydelta  = [
				[a11, b1, a13],
				[a21, b2, a23],
				[a31, b3, a33]
			];

			// вычисляем X определитель и выводим
			var resultydelta = resultdelta(ydelta);
			('.ydelta tr:nth-child(1) td:nth-child(6)').html(resultydelta);


			// рисуем главный определитель Z
			('.zdelta tr:nth-child(1) td:nth-child(2)').html(a11);
			('.zdelta tr:nth-child(1) td:nth-child(3)').html(a12);
			('.zdelta tr:nth-child(1) td:nth-child(4)').html(b1);

			('.zdelta tr:nth-child(2) td:nth-child(1)').html(a21);
			('.zdelta tr:nth-child(2) td:nth-child(2)').html(a22);
			('.zdelta tr:nth-child(2) td:nth-child(3)').html(b2);

			('.zdelta tr:nth-child(3) td:nth-child(1)').html(a31);
			('.zdelta tr:nth-child(3) td:nth-child(2)').html(a32);
			('.zdelta tr:nth-child(3) td:nth-child(3)').html(b3);

			// строим массив X определителя
			var zdelta  = [
				[a11, a12, b1], 
				[a21, a22, b2], 
				[a31, a32, b3] 
			];

			// вычисляем X определитель и выводим
			var resultzdelta = resultdelta(zdelta);
			('.zdelta tr:nth-child(1) td:nth-child(6)').html(resultzdelta);

			// вычисляем x, y, z и выводим
			var x = resultxdelta/resultmaindelta;
			var y = resultydelta/resultmaindelta;
			var z = resultzdelta/resultmaindelta;

			('.resultx').html(x.toFixed(2));
			('.resulty').html(y.toFixed(2));
			('.resultz').html(z.toFixed(2));

			('.itog, .input').css('visibility: visible;');

		} else {

			// нет решений
			('.out').css('visibility: visible;');
		}

	})();

	// если были внесены изменения, тогда перерасчитываем СЛАУ
	('.system span').on('blur', function(){
		Kramer();
	});