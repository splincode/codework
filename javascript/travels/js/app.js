function add_list(Card){
	// получаем информацию о карточке
	var data = document.querySelector('.card_add').value;
	
	// добавляем в неотсортированную цепочку
	Card.push(data);

	// выводим текущую цепочку
	var domlist = document.querySelector('.list');
	domlist.innerHTML = "";
	Card.forEach(function(value){
		domlist.innerHTML += `<p>${value}</p><br>`;
	});
}

document.querySelector('.sort').onclick = function(){
	// вызываем сортировку цепочки
	alert(Card);
}