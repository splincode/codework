#### Задание на первичном собеседовании JavaScript

1. Как отрендерится код?

```html
<div style="float: left; border: 1px solid red;">
  <span style="position: relative; top: -1000px; left: -1000px; border: 1px solid green;">
    Inner text
  </span>
</div>
```

**Решение:**

Хороший пример есть тут: http://ktonanovenkogo.ru/html/uroki-css/position-absolute-relative-fixed-pozicionirovaniya-html-css-left-right-top-bottom.html
Краткий ответ: суть в том, что текст внутри блока (Inner text) имеет размер по умолчанию размера шрифта в браузере, но так как вы применяете отступы, родительский (в нашем случае, плавающий блок) элемент будет считать, что внутренний блок находится на своем законном месте (без учета заданных нами в правилах Left и top сдвигов)

<img src="https://habrastorage.org/webt/59/e3/b3/59e3b30a79457748831035.png" />

2. Как можно выровнять блок 100x100 по центру экрана? 

```bash
<body>
  <div class="center"></div>
</body>
```

**Решение:**
Существует множество решений, примеры можно посмотреть тут:
http://vanseodesign.com/css/vertical-centering/


3. Напишите код (HTML + CSS), реализующий следующую раскладку страницы:
- ширина лейаута 70 % от вьюпорта, но не меньше 760px;
- 2 колонки: сайдбар шириной 150px и остальное место под контент;
- лейаут выровнен по центру

4. Напишите код, который при клике на любой div внутри root будет выводить в консоль его id . Можно использовать jQuery
````html
<div id="root" style="background: red;">
  root
  <span id="id1" style="background: lightblue;">id1</span>
  <div id="id2" style="background: green;">
    id2
    <div id="id3" style="background: yellow;">id3</div>
  </div>
</div>
````

5. Типы данных
Какие существуют типы данных в ES5? ES6?

6. Для чего служит оператор typeof ?
````js
Что вернут следующие выражения?
typeof undefined // 
typeof 0 // 
typeof true // 
typeof "foo" // 
typeof {} // 
typeof [] // 
typeof null // 
typeof function() {} // 
typeof (function() {})() // 
typeof Symbol() // 
typeof typeof window // 
````

7. Какое значение будет в A.c?
````js
var A, B;
A = B = {};
A.c = 1;
B.c = 2;
````

````js
var A, B;
A = B = 'test';
A.c = 1;
B.c = 2;
````

8. В JavaScript переменные объявленные следующим образом:
````js
a = 3; 
b = 'hello';
````

a) Cоздаются в локальном контексте
b) Cоздаются в глобальном контексте
c) Cоздание переменной без ключевого слова var – синтаксическая ошибка.

9.
````js
/**
* Есть функция и объект
* Напишите все известные вам способы, чтобы вывести в консоли значение x из объекта используя функцию
*/
function f() { console.log(this.x); }
var obj = {x: 'yandex'};
````

10. Напишите код, который сделает из массива объект
````js
// на входе массив
var arr = [
{name: 'width', value: 10}, 
{name: 'height', value: 20}
];
// на выходе объект {width: 10, height: 20}
````

11. Дана строка, состоящая из букв A-Z:
````js
AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
Нужно написать функцию RLE, которая на выходе даст строку вида:
A4B3C2XYZD4E3F3A6B28
````


**Решение**
````js
var input = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB";
var rle = {};
var rleOutput = "";

for (let i = 0; symbol = input[i]; ++i) {
    if (!rle[symbol]) {
        rle[symbol] = 1;
    } else {
        rle[symbol]++;
    }

    var nextValue = input[i + 1];
    if (nextValue !== symbol) {
        var countSymbol = rle[symbol] > 1 ? String(rle[symbol]) : '';
        rleOutput = rleOutput + symbol + countSymbol;
        delete rle[symbol];
    }

}

console.log(rleOutput === "A4B3C2XYZD4E3F3A6B28"); // true
````

Пояснение:
- если символ встречается 1 раз, он остается без изменений
- если символ повторяется более 1 раза, к нему добавляется количество повторений

12. Что произойдёт в результате выполнения следующего кода?
````js
({
  method: function() {
    (
      function() {
      alert(this);
      }
    )();
  }
}).method();
````

13. Проверка расстановки скобок в строке

````js
function check(string) {
 
    var stack = [];
    var table = {
     "{": "}",
     "(": ")",
     "[": "]"
    };

    for (let i = 0; string[i]; i++) {
     let lastElement = stack.slice(-1)[0];
     if (table[lastElement] == string[i]) {
       stack.pop();
     } else {
       stack.push(string[i]);
     }
    }

    return stack.length > 0 ? false : true;

}


check("({})({[]})"); // true
check("({)}"); // false

````
