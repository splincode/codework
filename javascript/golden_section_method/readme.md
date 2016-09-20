<h3>Оглавление</h3>
<a href="#one">1. Постановка задачи</a><br>
<a href="#two">&nbsp;&nbsp;&nbsp;1.1. Пример работы</a><br>
<a href="#three">2. Теория</a><br>

<h3 id="one">1. Найти fmax на отрезке [1, 2] для функции F(x)</h3>
<p>Найти fmax на отрезке [1, 2] для функции F(x) методом золотого сечения  <br>

<p>F(x) = x - 2*x<sup>2</sup> + (1/5)*x<sup>5</sup></p>


<b id="two">1.1. Пример работы</b> <br>
<img src="https://habrastorage.org/files/4c7/e4c/2b3/4c7e4c2b363d4c6eb6e58d9bfaf06761.png"/><br>
<img src="https://habrastorage.org/files/16d/396/ec7/16d396ec7ab446c0a28aa0053f55df31.png"/><br>
<img src="https://habrastorage.org/files/13b/14c/900/13b14c9005da4bd7a6f5f8c417f78543.png"/><br>
<p></p>

<h3 id="three">2. Указания</h3>

<b id="five">2.1. Примечание</b> <br>

Пусть задана функция {\displaystyle f(x):\;[a,\;b]\to \mathbb {R} ,\;f(x)\in \mathrm {C} ([a,\;b])} {\displaystyle f(x):\;[a,\;b]\to \mathbb {R} ,\;f(x)\in \mathrm {C} ([a,\;b])}. Тогда для того, чтобы найти определённое значение этой функции на заданном отрезке, отвечающее критерию поиска (пусть это будет минимум), рассматриваемый отрезок делится в пропорции золотого сечения в обоих направлениях, то есть выбираются две точки {\displaystyle x_{1}} x_{1} и {\displaystyle x_{2}} x_{2} такие, что:


Иллюстрация выбора промежуточных точек метода золотого сечения.
{\displaystyle {\frac {b-a}{b-x_{1}}}={\frac {b-a}{x_{2}-a}}=\varphi ={\frac {1+{\sqrt {5}}}{2}}=1.618\ldots } {\frac  {b-a}{b-x_{1}}}={\frac  {b-a}{x_{2}-a}}=\varphi ={\frac  {1+{\sqrt  {5}}}{2}}=1.618\ldots , где {\displaystyle \varphi } \varphi  — пропорция золотого сечения.
Таким образом:

{\displaystyle {\begin{array}{ccc}x_{1}&=&b-{\frac {(b-a)}{\varphi }}\\x_{2}&=&a+{\frac {(b-a)}{\varphi }}\end{array}}} {\displaystyle {\begin{array}{ccc}x_{1}&=&b-{\frac {(b-a)}{\varphi }}\\x_{2}&=&a+{\frac {(b-a)}{\varphi }}\end{array}}}
То есть точка {\displaystyle x_{1}} x_{1} делит отрезок {\displaystyle [a,\;x_{2}]} {\displaystyle [a,\;x_{2}]} в отношении золотого сечения. Аналогично {\displaystyle x_{2}} x_{2} делит отрезок {\displaystyle [x_{1},\;b]} {\displaystyle [x_{1},\;b]} в той же пропорции. Это свойство и используется для построения итеративного процесса.