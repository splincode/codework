template <class T>

class Vector {
   private:
    int count; // количество элементов в массиве по умолчанию
    int inc; // на сколько увеличиваем переполненный массив
    T *data; // тут храняться данные вектора
    T *temparray; // временная структура для копирования

   public:
     Vector();
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

     T& operator[] (int index); // доступ к линейной памяти, добавление элемента вектора
     T find_min();
     T find_max();
};
