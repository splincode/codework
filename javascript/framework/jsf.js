	
	'use strict';

	String.prototype.it = {iterator: 0};

	String.prototype.get = function(i){
		this.it.iterator = i;
		return this;
	};
	
	String.prototype.css = function(stringES6){
		
		var cssparse = function( str /* строка для парсинга */ ){
			str = str.split(/:|;/g); // массив для сортировки свойств
			let len = str.length-1;
			let temp = []; // промежуточный массив, линейный
			let css = new Map();

			for(let i = 0; i < len; ++i){
				if (i % 2) {
					temp.push(str[i].trim());
					css.set(temp[i-1], temp[i]);
					delete temp[i], temp[i-1];
				} else {
					temp.push(
						str[i]
							.replace(/\s+/g, '')
							.replace(/(\n)+|(\t)+|(\r)+/g, ' ')
							.replace(/\/\*[\W|\w]+\*\//g, '')
					);
				}
			}

			str = null;	len = null; temp = null;

			return css;
		}

		var csslist = function(i, el) {

			let css = new Map();

			if (i > 0) {
				let dom = document.querySelectorAll(el.toString());
				css = cssparse(dom[i].style.cssText);
				el.it.iterator = 0;
			} else {
				let dom = document.querySelector(el);
				css = cssparse(dom.style.cssText);
			}

			return css;
		};

		var domcssset = function(it, el, css) {	

			let dom = document.querySelectorAll(el.toString());

			if (it > 0) {

				it = it - 1;
				
				css.forEach(function (val, key) {
					dom[it].style[key] = val;
				});

				el.it.iterator = 0;

			} else {

				for(let i = 0; i < dom.length; ++i){
					css.forEach(function (val, key) {
						dom[i].style[key] = val;
					});
				} 

			}
		}

		// stringES6 - список css свойств
		stringES6 = stringES6 || false; 
		let it = this.it.iterator;

		if (stringES6) {
			// если переданы свойства - устанавливаем

			if (stringES6.indexOf(':') > -1)
				// если переданы css-свойства
				domcssset(it, this, cssparse(stringES6));
			else
				// если хотим получить значение свойства
				return csslist(it, this).get(stringES6);

		} else {

			// возвращаем все свойства данного элемента
			return csslist(it-1, this);

		}

		return this;
	};

	String.prototype.html = function(htmlcode, position){

		var domgethtml = function(it, el){
			let dom = document.querySelectorAll(el.toString());
			el.it.iterator = 0;

			if (it > 0) return dom[it-1].innerHTML;
			else return dom[0].innerHTML;
		}

		var domsethtml = function(it, position, el, code){
			let dom = document.querySelectorAll(el.toString());

			if (it > 0) {

				el.it.iterator = 0;
				if (position == 'inner') dom[it-1].innerHTML = code;
				else dom[it-1].insertAdjacentHTML(position, code);

			} else {

				if (position == 'inner') for(let i = 0; i < dom.length; ++i) dom[i].innerHTML = code;
				else for(let i = 0; i < dom.length; ++i) dom[i].insertAdjacentHTML(position, code);
		
			}

		};

		// htmlcode - html код 
		htmlcode = htmlcode || false;
		position = position || 'inner';
		let it = this.it.iterator;

		if(htmlcode) domsethtml(it, position, this, htmlcode);
		else return domgethtml(it, this);

		return this;
		
	};

	String.prototype.text = function(text){

		var domgettext = function(it, el){
			let dom = document.querySelectorAll(el.toString());
			el.it.iterator = 0;

			if (it > 0) return dom[it-1].textContent;
			else return dom[0].textContent;
		}

		var domsettext = function(it, el, text){
			let dom = document.querySelectorAll(el.toString());

			if (it > 0) {

				el.it.iterator = 0;
			    dom[it-1].textContent = text;
				
			} else {
				for(let i = 0; i < dom.length; ++i) dom[i].textContent = text;
			}

		};

		text = text || false;
		let it = this.it.iterator;

		if(text) domsettext(it, this, text);
		else return domgettext(it, this);
		
	};


	String.prototype.delete = function(){
		let dom = document.querySelectorAll(this.toString());
		for(let i = 0; i < dom.length; ++i) dom[i].remove();
	};

	String.prototype.on = function(event, foo){
		event = "on"+event;

		let dom = document.querySelectorAll(this.toString());
		for(let i = 0; i < dom.length; ++i) {
			dom[i][event] = foo;
		}

		return this;
	};

	String.prototype.mediacss = function(type, value){
		let dom = this.toString();
		let cssmedia = `@media ${type} { \n ${dom} { ${value} } \n }; \n`;
	 	let style = document.createElement('style');

	 	style.type = 'text/css';
	 	if (style.styleSheet){
	 	  style.styleSheet.cssText = cssmedia;
	 	} else {
	 	  style.appendChild(document.createTextNode(cssmedia));
	 	}

	 	document.body.appendChild(style);

	 	return this;
	};

	String.prototype.addClass = function(classtext) {
		let dom = document.querySelectorAll(this.toString());
		for(let i = 0; i < dom.length; ++i) dom[i].className += ` ${classtext}`;

		return this;	
	};

	String.prototype.removeClass = function(classname) {
		let dom = document.querySelectorAll(this.toString());
		for(let i = 0; i < dom.length; ++i) dom[i].className = dom[i].className.replace(` ${classname}`, '');

		return this;	
	};

	Map.prototype.toString = function(css){
		let text = '';
		var i = 0;

		if (css) {
			
			this.forEach(function(value, key){
				text += key + ": " + value + "; ";
			});

		} else {

			this.forEach(function(value, key){
				text += key + ", " + value + ",";
			});

		}

		return text;
	};