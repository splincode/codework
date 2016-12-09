'use strict';

class Travelsort {
    constructor(Cards) {

    	let list = Cards || false;
    	let errorCode = (list) ? 0 : 1;
    	
    	let err = [
    		true,  // [errorCode = 0]: по умолчанию, успешно
    		'неправильные входные данные', // [errorCode = 1]
    	];

    	this.printError = () => {
    		return err[errorCode];
    	}

       	this.sort_ticket = () => {
       		let k = 0; 
       		let len = list.length;

       		// сортировка перестановками
       		while(k < len) {
       			for(let i = 0; i < len; ++i) {
       				let from = list[i][1].toLowerCase();
       				
       				for (let j = 0; j < len; ++j) {
       					let to = list[j][2].toLowerCase();

       					if (from == to) {
       						list.splice(j+1, 0, list.splice(i, 1)[0]);
       						break;
       					} else if (j == len - 1) k++;
       				}

       			}
       		}

       		return list;
       	}

       	this.write = () => {
       		document.write(`Отсортированный маршрут: <br>`);
       		for(let i = 0; i < list.length; i++) {
       			let info =  list[i][0];
       			let whence = list[i][1];
       			let where = list[i][2];

       			document.write(`Информация в карточке:  ${info}, откуда: <b>${whence}</b>, куда: <b>${where}</b> <br>`);
       		}
       		
       		document.write(`<br>`);
       	}

    }
};