<h3>Оглавление</h3>
<a href="#one">1. Решение задачи</a><br>
<a href="#two">&nbsp;&nbsp;&nbsp;1.1. Пример работы</a><br>
<a href="#three">2. Теория</a><br>
<a href="#four">&nbsp;&nbsp;&nbsp;2.1. Стек вызовов</a><br>
<a href="#six">&nbsp;&nbsp;&nbsp;2.3. Дополнительная литература</a><br>

<h3 id="one">Написать программу, которая будет вредоносной</h3>
<p></p>

<b id="two">1.1. Пример работы</b><br>
<img src="https://habrastorage.org/files/825/9b9/a84/8259b9a840de427d862193a706695a28.png" alt="">
<br>
```c++
#include <iostream>
using namespace std;

void virus(){ cout << "выполнился вредоносный код" << endl;}

void foo(){
    cout << "foo" << endl;

    void* a[1];
    a[3] = (void*) (&virus); // вышли за пределы памяти
}

int main(){

    foo();
    return 0;
}

```

<h3 id="three">2. Теория</h3>
<b id="four">2.1. Cтек вызовов</b>
<img src="https://upload.wikimedia.org/wikipedia/ru/5/55/CallStackFrame.png" align="left" alt="">
<p>Стек вызовов (применительно к процессорам — просто «стек») — хранит информацию для возврата управления из процедур в программу (или подпрограмму, при вложенных или рекурсивных вызовах) и/или для возврата в программу из обработчика прерывания. Стек вызовов может использоваться для различных нужд, но основное его назначение — отслеживать место, куда каждая из вызванных процедур должна вернуть управление после своего завершения. Для этого при вызове процедуры (командами вызова) в стек заносится адрес команды, следующей за командой вызова («адрес возврата»). По завершении вызванная процедура должна выполнить команду возврата для перехода по адресу из стека.</p>

<b id="six">2.2. Дополнительная литература</b>
<p><a href="https://stepic.org/lesson/%D0%A1%D1%82%D0%B5%D0%BA-%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D0%BE%D0%B2-538/step/6?course=%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%8F%D0%B7%D1%8B%D0%BA%D0%B5-C%2B%2B&unit=861">Видеоурок</a></p>
<p><a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B0_(C%2B%2B)">Ссылка</a></p>
<p><a href="http://cplus-plus-ru.blogspot.ru/2010/10/c_26.html">C++. Возврат ссылки</a></p>
<p><a href="http://ru.stackoverflow.com/questions/178009/%D0%9A%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%82-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8">Как работает возврат ссылки</a></p>
<p><a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BA_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D0%BE%D0%B2">Как работает возврат ссылки</a></p>
