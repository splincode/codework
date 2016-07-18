<h3>Оглавление</h3>
<a href="#n1">1. Почему выводится 12, а не 3</a><br>
<a href="#n2">2. Пример работы</a><br>
<a href="#n3">3. Указания</a><br>
<a href="#n4">4. Исходные значения и описание</a><br>
<a href="#n5">5. Исходные значения и описание</a><br>
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