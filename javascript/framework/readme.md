## JSF

JS-фреймворк для работы с css классами dom элементов

## Использование (только в Google Chrome)
c поддержкой ES6

```html
  <script src="jsf.js"></script>
```

## Демо

### 

1. <a href="https://github.com/splincode/codework/blob/master/javascript/framework/example1/index.html">Управление блоками</a><br>
<img src="https://habrastorage.org/files/251/f37/013/251f37013e0649a588db1e4432f59746.gif" align="center" /> <br> <br>
2. <a href="https://github.com/splincode/codework/blob/master/javascript/framework/example2/index.html">Решение СЛАУ методом Крамера</a>  <br>
<img src="https://habrastorage.org/files/326/639/f2e/326639f2eeb347d795fbb285bb407ec5.png" align="center"/> <br> <br>

## Документация

### Содержание
1. Выборка <br>
2. dom.css() <br>
3. dom.css().toString() <br>
4. dom.addClass() <br>
5. dom.removeClass() <br>
6. dom.get() <br>
7. dom.html() <br>
8. dom.text() <br>
9. dom.delete() <br>
10. dom.on() <br>
11. dom.mediacss() <br>

### Выборка

Основной метод framework`a, который находит элементы DOM.
Возвращает строку, которая затем подхватывается заранее определенными методами.

```js
dom = ('#id'); // => получам id элемент 
dom = ('.class'); // => получам элементы c определенным классом
dom = ('tag'); // => получам все теги
```
### dom.css()

Этот метод получает все css-свойства
первого элемента из листа dom-выборки,
также можно узнать значение конкретного свойства и 
установить css-свойства для всех dom-элементов всей выборки.

```js
// каждое css-свойство должно
// заканчиваться точкой с запятой (;)
('div#main article').css(`
	width: 130px;
	height: 130px;
	padding: 10px;
`); 

('article').css('padding'); // "10px"
('article').css(); // ассоциативный массив свойств
('article').css().toString('css'); // "width: 130px; height: 130px; padding: 10px"
```

### dom.addClass()

Этот метод добавляет класс dom-элементам из выборки.

```js
('p').addClass('title'); // dom: <p class="title"></p>
```

### dom.removeClass()

Этот метод удаляет класс у dom-элементов из выборки.

```js
('p').removeClass('title'); // dom: <p></p>
```

### dom.get()

Этот метод получает текущий номер элемента в списке элементов выборки.

```js
('p').get(1).css('font-size: 30px'); 

// аналогичный, но более стабильный способ:
('p:nth-child(1)').css('font-size: 30px'); 
```

### dom.html()

Этот метод получает html содержимое первого элемента в списке элементов выборки.
Также можно записать html-код внутрь dom-элемента, перед dom-элементов и после. 

```js
// получает html содержимое dom-элемента с идентификатором max
('#max').html();

// перезаписывает html содержимое dom-элемента с идентификатором max
('#max').html("<p style='font-size: 40px'>text</p>");

// добавляет параграф перед dom-элементом с идентификатором max
('#max').html("<p style='font-size: 40px'>text</p>", 'beforebegin');

// добавляет параграф внутри dom-элемента, перед первым дочерним потомком
('#max').html("<p style='font-size: 40px'>text</p>", 'afterbegin');

// добавляет параграф внутри dom-элемента, после последнего дочернего элемента
('#max').html("<p style='font-size: 40px'>text</p>", 'beforeend'); 

// добавляет параграф после dom-элемента с идентификатором max
('#max').html("<p style='font-size: 40px'>text</p>", 'afterend') 
```

### dom.text()

Этот метод устанавливает и получает текстовое содержимое dom-элемента.

```js
let pi = Math.PI;
('p.math').text(`Число Pi = ${pi}`);
('p.math').text(); // "Число Pi = 3.141592653589793"
```

### dom.delete()

Этот метод удаляет dom-элементы всей выборки.

```js
('p').delete();
('p').text(); // undefined
```

### dom.on()

Этот метод устанавливает пользовательские события.

```js
('p').on("click", function(){
	console.log('click p');
});

('input').on("blur", function(){
	console.log('onblur');
});
```

### dom.mediacss()

Этот метод устанавливает медиа-запрос для dom-элемента.
Таким образом, мы можем, динамически при помощи javascript, влиять 
на поведение окна браузера

```js

// если окно браузера больше 1024px цвет фона страницы будет светло-зеленым
('body').mediacss('screen and (min-width: 1024px)', `
	background-color: lightgreen;
`);

// если свойства были уже определены в атрибуте style,
// только !important cможет переопределить их
('.block').mediacss('(max-width: 1000px)', `
	background: yellow !important;
	width: 80% !important;
	margin: 10px auto !important;
`);
```

## Недостатки

### 

1. Расширение базовой структуры данных String, <br>
отчего в будущем это может привести к регрессии веб-приложения
2. Неотлаженные до конца методы
3. Поддержка ES6 синтаксиса только в Google Chrome