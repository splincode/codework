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
Доступ к «лишним» аргументам. Доступ к ним осуществляется через «псевдо-массив» arguments. 
Он содержит список аргументов по номерам: arguments[0], arguments[1]…, а также свойство length.

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

<b>Решение на JSfiddle 1: </b>  http://jsfiddle.net/omaxphp/L53q0bu5/ <br>
<b>Решение на JSfiddle 2: </b>  http://jsfiddle.net/omaxphp/sLy2es5f/ <br>

```text
В переменной, которой присвоен объект, хранится не сам объект,
а «адрес его места в памяти», иными словами – «ссылка» на него.

Вот как выглядит переменная, которой присвоен объект:
var user = {
  name: "Вася"
};

user не есть объект, это всего лишь ссылка на объект вне этой переменной
****************************
var user = { name: "Вася" }; // в переменной - ссылка
var admin = user; // скопировали ссылку
****************************
Так как объект всего один, то изменения через любую переменную видны в других переменных:
admin.name = 'Петя'; // поменяли данные через admin
alert(user.name); // 'Петя', изменения видны в user
****************************
Объект присваивается и копируется «по ссылке». То есть, в переменной хранится не сам объект а,
условно говоря, адрес в памяти, где он находится. Если переменная-объект скопирована или передана
в функцию, то копируется именно эта ссылка, а объект остаётся один в памяти. Это – одно из ключевых
отличий объекта от примитива (числа, строки…), который при присвоении как раз копируется «по значению»,
то есть полностью.
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

<b>Решение на JSfiddle 1: </b> http://jsfiddle.net/omaxphp/baw7do0q/ <br>
<b>Решение на JSfiddle 2: </b> http://jsfiddle.net/omaxphp/41jqdops/ <br>
<b>Решение на JSfiddle 3: </b> http://jsfiddle.net/omaxphp/1q54q2v0/ <br>

```text
Наследование на классах. Функция extend

Для того чтобы объект класса Rabbit унаследовал от класса Animal - нужно
Описать Animal
Описать Rabbit
Унаследовать кролика от объекта Animal:
Rabbit.prototype = new Animal()
Однако, у такого подхода есть два недостатка:

Для наследования создается совершенно лишний объект new Animal()
Конструктор Animal должен предусматривать этот лишний вызов для и при необходимости делать такое "недоживотное", годное лишь на прототип.
К счастью, можно написать такую функцию, которая будет брать два класса и делать первый потомком второго:

function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

****************************
функция не создает лишних объектов и в качестве бонуса записывает класс-родитель
в свойство потомка superclass - это удобно для вызова родительских методов в 
конструкторе и при перекрытии методов
****************************
function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

****************************
// ---- родительский класс ----

function Animal(name, walkSpeed) {

    // объявить приватную переменную
    var speed = walkSpeed

    // объявить открытую переменную
    this.distance = 0

    // добавить метод, использующий private speed
    this.walk = function(time) {
        this.distance = this.distance + time*speed
    }

    // добавить метод, использующий private name
    this.toString = function() {
        return name+" на расстоянии "+this.distance
    }
}

// ---- класс наследник ----

function Bird(name, walkSpeed, flySpeed) {
    // вызов родительского конструктора
    Bird.superclass.constructor.call(this, name, walkSpeed)

    this.fly = function(time) {
        this.distance = this.distance + time*flySpeed
    }
}

extend(Bird, Animal)

bird = new Bird("Птыц", 1, 10)

bird.walk(3)

alert(bird) // => Птыц на расстоянии 3

bird.fly(2)

alert(bird) // => Птыц на расстоянии 23


```

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

<b>Решение на JSfiddle: </b> http://jsfiddle.net/omaxphp/u3cvggf1/ <br>
<b>Решение на JSfiddle: </b> http://jsfiddle.net/m4errf26/ <br>

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

<b>Решение на JSfiddle: </b>  https://jsfiddle.net/omaxphp/8akp2834/ <br>

```text
В примере, была ошибка
Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.
Это означает о том, что вам необходимо сначала использовать метод .open ( .. )
перед установкой заголовков запроса и при этом для каждого запроса нужно 
создавать новый XMLHttpRequest

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'https://api.github.com/users/o0/repos', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}
```