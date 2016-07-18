<h3>Оглавление</h3>
<a href="#n1">1. Почему выводится 12, а не 3</a><br>
<a href="#n2">2. Почему на экране ничего не выводится</a><br>
<a href="#n3">3. Почему интерпретатор указывает нам в выводе тип number</a><br>
<a href="#n4">4. Как сделать так, чтобы функция могла принимать нуль и при этом делала проверку на существование аргумента</a><br>
<a href="#n5">5. Почему происходит изменение объекта foo, при изменении объекта bar</a><br>
<a href="#n6">6. Исходные значения и описание</a><br>
<a href="#n7">7. Исходные значения и описание</a><br>
<a href="#n8">8. Исходные значения и описание</a><br>

<h3 id="n1">1. Почему выводится 12, а не 3</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/x9xwug8x/ <br>

```
function sum(a, b) {
  return a + b;
};

document.body.innerHTML = sum(1, '2');
```

<b>Решение на JSfiddle: </b>

<h3 id="n2">2. Почему на экране ничего не выводится</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/a919Lv0L/1/ <br>

```javascript
if (typeof 1 = 'number') {
    document.body.innerHTML = 'It is a number';
}
```

<b>Решение на JSfiddle: </b>

<h3 id="n3">3. Почему интерпретатор указывает нам в выводе тип number</h3>
<p>Объяснить поведение интерпретатора, дать рекомендации<br>
<b>Ссылка на JSfiddle: </b> http://jsfiddle.net/z2bvxu9b/1/ <br>

```javascript
document.body.innerHTML = typeof (1 / []);
```

<b>Решение на JSfiddle: </b>

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

<b>Решение на JSfiddle: </b>

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