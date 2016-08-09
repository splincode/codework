<h3>Оглавление</h3>
<a href="#one">1. Постановка задачи</a><br>
<a href="#two">&nbsp;&nbsp;&nbsp;1.1. Пример работы</a><br>


<h3 id="one">1. Пример проивзодительной SQL-выборки </h3>
<p>Есть таблица заказов, состоящая из полей order_id (номер заказа), client_id (идентификатор клиента), order_date (дата создания заказа). </p>

<p>Надо получить список клиентов, которые совершили более 3 заказов, но при этом ни одного заказа за последний месяц. Подумайте над наиболее производительным решением (не обязательно в один SQL-запрос). Результирующая таблица должна содержать идентификатор клиента, номер и дату его последнего заказа. </p>

<b id="two">1.1. Пример работы</b> <br>
<p></p>

```sql

CREATE TABLE OrderRock
  (
      `order_id` int, 
      `client_id` int, 
      `client_name` varchar(55),
      `order_date` date
    )
;
  
INSERT INTO OrderRock
  (`order_id`, `client_id`, `client_name`, `order_date`)
    
VALUES
  (1, 5, 'Maxim Ivanov', '21.08.2016'),
    (2, 1, 'Petrov Petrovich', '25.08.2016'),
    (3, 5, 'Maxim Ivanov', '10.04.2016'),
    (4, 2, 'Ivan Ivanovich', '01.04.2016'),
    (5, 8, 'Alan Dzagoev', '05.04.2016'),
    (6, 10, 'Nikita Chukin', '10.04.2016'),
    (7, 5, 'Maxim Ivanov', '01.01.2016'),
    (8, 5, 'Maxim Ivanov', '15.02.2016')    
;
```

Выборка:

```sql
SELECT
  client_id,
  client_name,
  order_date,
  count(*) as counts
FROM
  OrderRock
WHERE
  order_date<(NOW()- interval 1 month)
HAVING count(*) >=3
```

Решение на SQLFiddle: http://sqlfiddle.com/#!9/e9e838/9