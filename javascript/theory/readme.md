<h3>Оглавление</h3>
<a href="#n1">1. Почему выводится 12, а не 3</a><br>
<a href="#n2">2. Почему на экране ничего не выводится</a><br>
<a href="#n3">3. Почему интерпретатор указывает нам в выводе тип number</a><br>
<a href="#n4">4. Как сделать так, чтобы функция могла принимать нуль
и при этом делала проверку на существование аргумента</a><br>
<a href="#n5">5. Почему происходит изменение объекта foo, при изменении объекта bar</a><br>
<a href="#n6">6. Почему не работает наследование прототипов</a><br>
<a href="#n7">7. Сделайте так, чтобы рамка поля ввода подсвечивалась, когда она выделена пользователем</a><br>
<a href="#n8">8. Почему при запросах на экран не выводятся теги pre и их данные</a><br>

<h3 id="n1">1. Почему выводится 12, а не 3</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/x9xwug8x/ <br>

```javascript
function sum(a, b) {
  return a + b;
};

document.body.innerHTML = sum(1, '2');
```

<b>Решение на JSfiddle: </b> http://jsfiddle.net/crnm1gq7/ <br>

```text
Всего есть три преобразования:

Строковое преобразование
Числовое преобразование
Преобразование к логическому значению

Оператор (+) может отрабатывать определенным образом:
// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0

// Number + String -> concatenation
5 + "foo" // "5foo"

// String + Boolean -> concatenation
"foo" + false // "foofalse"

// String + String -> concatenation
"foo" + "bar" // "foobar"

```

<h3 id="n2">2. Почему на экране ничего не выводится</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/a919Lv0L/1/ <br>

```javascript
if (typeof 1 = 'number') {
    document.body.innerHTML = 'It is a number';
}
```

<b>Решение на JSfiddle: </b> http://jsfiddle.net/p1wqLa95/ <br>

```text
Для проверки на равенство в JS существует специальные операторы сравнения
Равно (==) и строгое равно (===), рекомендуется использовать последнее

// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number(1) === 'number'; // but never use this form!


// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof always returns a string
typeof String("abc") === 'string'; // but never use this form!


// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // but never use this form!


// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 


// Objects
typeof {a:1} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';


// The following is confusing. Don't use!
typeof new Boolean(true) === 'object'; 
typeof new Number(1) === 'object'; 
typeof new String("abc") === 'object';


// Functions
typeof function(){} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

// This stands since the beginning of JavaScript
typeof null === 'object';

// Regular expressions
typeof /s/ === 'function'; // Chrome 1-12 Non-conform to ECMAScript 5.1
typeof /s/ === 'object';   // Firefox 5+  Conform to ECMAScript 5.1
```

<h3 id="n3">3. Почему интерпретатор указывает нам в выводе тип number</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/z2bvxu9b/1/ <br>

```javascript
document.body.innerHTML = typeof (1 / []);
```

<b>Решение на JSfiddle: </b> http://jsfiddle.net/e1zaxax7/ <br>

```text
Неявное численное преобразование примитивов. Если простым языком, 
то во время математических операций, операнды преобразовываются
к числовым типам. Исключением в JS является сложение строковых значений,
если их не получилось преобразовать к числовым. В этом случае, мы получим
на выходе строку. С другим оператором, в большинстве случаем - NaN

console.log( +[] ); // 0
console.log( 1 / [] ); // Infinity, т.к. исходя из примера выше, +[] === 0, т.е. деление на 0
console.log( 'A' + [] ); // A
console.log( 'A' - [] ); // NaN
```

<h3 id="n4">4. Как сделать так, чтобы функция могла принимать нуль и при этом делала проверку на существование аргумента</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/kwvzhq77/4/ <br>

```javascript
function getAHalf(arg) {
	if (!arg) {
        return null;
    }
    
    return arg / 2;
}

document.body.innerHTML = getAHalf(0);
```

<b>Решение на JSfiddle: </b> http://jsfiddle.net/omaxphp/1x87gt3f/ <br>

```text
Доступ к «лишним» аргументам. Доступ к ним осуществляется через «псевдо-массив» arguments. Он содержит список аргументов по номерам: arguments[0], arguments[1]…, а также свойство length.

Например, выведем список всех аргументов:
function sayHi() {
  for (var i = 0; i < arguments.length; i++) {
    alert( "Привет, " + arguments[i] );
  }
}

sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'
Все параметры находятся в arguments, даже если они есть в списке. 
Код выше сработал бы также, будь функция объявлена sayHi(a,b,c)
```

<h3 id="n5">5. Почему происходит изменение объекта foo, при изменении объекта bar</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/d3gkcvst/ <br>

```javascript
var foo = { a: 1 };
var bar = foo;
bar.a++;

document.body.innerHTML = foo.a;
```

<b>Решение на JSfiddle: </b> 

```text
В переменной, которой присвоен объект, хранится не сам объект, а «адрес его места в памяти», иными словами – «ссылка» на него.

Вот как выглядит переменная, которой присвоен объект:
var user = {
  name: "Вася"
};


user не есть объект, это всего лишь ссылка на объект вне этой переменной

var user = { name: "Вася" }; // в переменной - ссылка

var admin = user; // скопировали ссылку

Так как объект всего один, то изменения через любую переменную видны в других переменных:

var user = { name: 'Вася' };

var admin = user;

admin.name = 'Петя'; // поменяли данные через admin

alert(user.name); // 'Петя', изменения видны в user
```

<h3 id="n6">6. Почему не работает наследование прототипов</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/pq28aqys/1/ <br>

```javascript
function extends(child, parent) {
    var emptyCtor = function() {};
    emptyCtor.prototype = parent.prototype;
    child.prototype = new emptyCtor;
    child._super = parent;
    return child;
};

var ParentClass = function() {
	this.a = 1;
};

var ChildClass = extends(function() {}, ParentClass);

document.body.innerHTML = new ChildClass.a;

```

<b>Решение на JSfiddle: </b>

<h3 id="n7">7. Сделайте так, чтобы рамка поля ввода подсвечивалась, когда она выделена пользователем</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/usbacu8t/2/ <br>

```html
<form id="formElement">
    One: <input type="text"><br>
    Two: <input type="text">
</form>
```

```css
.focused {
    outline: solid 2px red;
}
```

```javascript
var formElement = document.forms['formElement'];

formElement.onfocus = function(evt) {
    var activeElement = formElement.querySelector('.focused');
	if (activeElement) {
	    activeElement.classList.remove('focused');
    }
    evt.target.classList.add('focused');
};

formElement.onblur = function(evt) {
	var activeElement = formElement.querySelector('.focused');
    if (activeElement) {
     	activeElement.classList.remove('focused');   
    }
};
```

<b>Решение на JSfiddle: </b>

<h3 id="n8">8. Почему при запросах на экран не выводятся теги pre и их данные</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/ctgarz3o/ <br>

```javascript
var DataLoader = {
	xhr: new XMLHttpRequest,
    load: function(url, callback, method) {
        this.xhr.onload = callback;
        this.xhr.send(method || 'GET', url);
    }
};

function show_data(evt) {
	var xhr = evt.target;
    document.body.innerHTML = '<pre>' + xhr.response + '</pre>';
};

DataLoader.load('https://api.github.com/users/o0/repos', show_data);
DataLoader.load('https://api.github.com/repositories', show_data);
```

<b>Решение на JSfiddle: </b>