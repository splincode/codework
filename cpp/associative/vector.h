#include <iostream>
using namespace std;

template <class T>

class Vector {
   private:
    int count; // количество элементов в массиве по умолчанию
    int inc; // cколько сейчас элементов в массиве
    int it; // начальная позиция для прохода по массиву

    T *data; // тут храняться данные вектора
    T *temparray; // временная структура для копирования

    string *key; // ассоциативные ключи массива
    string *temp;

    T& operator[] (int index); // доступ к линейной памяти, добавление элемента вектора

   public:
     Vector();
     T& operator[] (string key); // доступ к линейной памяти, добавление элемента вектора
     string keyname();
     T& val();
     int& iterator();
     int end();

     ~Vector();





/*


     Vector(int n); // размер вектора по умолчанию
     Vector(Vector<T>& source);  // создаем второй такой же объект
     ~Vector(); // очищаем память по завершению работы

     int size(); // получаем размер вектора

     void del(int index); // удаление элемента по индексу
     void after(T arg); // добавление в конец
     void operator = (Vector<T>& B);
     void operator+=(Vector<T>& B);
     void operator+=(T arg);
     void fill(T arg, bool stdcin = false); // заполняем вектор
     void print(); // выводим вектор
     void sort(); // сортировка



     T find_min();
     T find_max();*/
};
