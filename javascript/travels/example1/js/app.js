'use strict';

let add_list = (Cards) => {
	Cards = Cards || false;

	// получаем информацию о карточке
	let textarea = document.querySelector('.card_add');
	let input_from = document.querySelector('.from');
	let input_to = document.querySelector('.to');

	let data = textarea.value.trim() || false; 
	let whence = input_from.value.trim() || false;
	let where = input_to.value.trim() || false;
	
	let ticket = [
		data, // прочая информация
		whence, // откуда
		where // куда
	]; 

	// если не все поля заполнены
	if (data && whence && where) 
		Cards.push(ticket);
	else { 
		alert('Не все данные введены');
		return 0; 
	}

	// выводим в текущую цепочку
	let domlist = document.querySelector('.list');
	domlist.innerHTML = "";

	let count = 0;

	Cards.forEach(function(value) {
		let info = value[0]; // текст карточки
		domlist.innerHTML += `<p>${info}</p><br>`;
		count++;
	});

	// показываем количество карточек
	document.querySelector('.card_num').innerHTML = count;

	// очищаем поля ввода данных
	let  clear = [textarea, input_from, input_to];
	clear.forEach(function(element){element.value = '';});
}

let sort_list = (Cards) => {
	if (Cards.length < 1) Cards = false;

	// Вызываем API
	let sort = new Travelsort(Cards); 
	if(sort.printError() == true){
		
		// вызываем сортировку 
		Cards = sort.sort_ticket();
		
		// выводим на экран
		let count = 0;
		let printdom = document.querySelector('.end_list');
		printdom.innerHTML = '';

		Cards.forEach(function(value) {
			let info = value[0]; // текст карточки
			count++;

			printdom.innerHTML += `
				<p class="ticket">
					<span class="node">${count}</span>
					${info}
				</p>
			`;
		});

	} else {
		alert(sort.printError());
	}
}