#include "vector.h"
#include <iostream>
using namespace std;

template <typename T>
Vector<T>::Vector(){
    inc = 5;
    count = 10; // если пользователь указал свое значение количества элементов
    data = new T[count]; // создание линейной памяти
}

template <typename T>
Vector<T>::Vector(int n){
    inc = 5;
    count = n; // если пользователь указал свое значение количества элементов
    data = new T[count]; // создание линейной памяти
}

template <typename T>
Vector<T>::~Vector(){
    delete [] data;
    delete [] temparray;
}

template <typename T>
Vector<T>::Vector(Vector<T>& source){
    if (count == source.size()){
        for (int i = 0; i < count; ++i) data[i] = source[i];
    } else {
        data = new T [source.size()];
        for (int i = 0; i < source.size(); ++i) data[i] = source[i];
    }

};

template <typename T>
void Vector<T>::del(int index) {
    int n = 0;
    temparray = new int[count - 1];

   for (int i = 0; i < count; ++i) if (i != index) { temparray[n] = data[i]; n++; }
   data = new T [count - 1];

   for (int i = 0; i < (count - 1); ++i) data[i] = temparray[i];
   delete [] temparray;

   count = count - 1;
}

template <typename T>
int Vector<T>::size(){return count;}

template <typename T>
void Vector<T>::operator +=(T arg){
    this->after(arg);
}

template <typename T>
T Vector<T>::find_max(){
    T tmp = data[0];
    int j = 0;
    for(int i=1; i < count; ++i){
        if (tmp < data[i]) {tmp = data[i]; j = i;}
    }

    return data[j];
}

template <typename T>
T Vector<T>::find_min(){
    T tmp = data[0];
    int j = 0;
    for(int i=1; i < count; ++i){
        if (tmp > data[i]) {tmp = data[i]; j = i;}
    }

    return data[j];
}

template <typename T>
void Vector<T>::fill (T arg, bool stdcin) {
    if (stdcin) {
        T enter;
        for(int i=0; i<count; i++){

            cout << "[" << i << "]=";
            if (cin>>enter){

                data[i] = enter;
            } else data[i] = arg;

        }
    } else {
        for(int i=0; i<count; i++){
            data[i] = arg;
        }
    }
}

template <typename T>
void Vector<T>::print () {
    for(int i=0; i < count; ++i){
        cout << "[" << i << "]= " << data[i] << endl;
    }
}

template <typename T>
void Vector<T>::sort()
{
    T tmp;
    for(int i = 0; i < count; ++i) // i - номер текущего шага
    {
        int pos = i;
        tmp = data[i];
        for(int j = i + 1; j < count; ++j) // цикл выбора наименьшего элемента
        {
            if (data[j] < tmp)
           {
               pos = j;
               tmp = data[j];
           }
        }
        data[pos] = data[i];
        data[i] = tmp; // меняем местами наименьший с a[i]
    }
}

template <typename T>
T& Vector<T>::operator[] (int index) {
    if (index > count) {
        if (index < (count+inc)) {

            // если обратились за пределы нашей памяти, расширяем вектор
            temparray = new T[count];
            for (int i = 0; i < count; ++i) temparray[i] = data[i];
            data = new T[count + inc];
            for (int i = 0; i < count; ++i) data[i] = temparray[i];
            delete [] temparray;

            count += inc;

        } else {
            inc = (index - count) + 1;

            temparray = new T[count];
            for (int i = 0; i < count; ++i) temparray[i] = data[i];
            data = new T[count + inc];
            for (int i = 0; i < count; ++i) data[i] = temparray[i];
            delete [] temparray;

            count += inc;

            inc = 5;
        }
    }

    return data[index];

}

template <typename T>
void Vector<T>::operator+= (Vector<T>& B) {
    // если обратились за пределы нашей памяти, расширяем вектор
    int j = count;

    temparray = new T[count];
    for (int i = 0; i < count; ++i) temparray[i] = data[i];
    data = new T[count + B.size()];
    for (int i = 0; i < count; ++i) data[i] = temparray[i];
    delete [] temparray;

    count = count + B.size();

    for(int i = 0; i < B.size(); ++i) {
        data[j] = B[i];
        j++;
    }
}

template <typename T>
void Vector<T>::operator = (Vector<T>& source){
    for(int i = 0; i < source.size(); ++i){
        data[i] = source[i];
    }
}

template <typename T>
void Vector<T>::after(T arg){

    temparray = new T[count];
    for (int i = 0; i < count; ++i) temparray[i] = data[i];

    data = new T[count + 1];
    for (int i = 0; i < count; ++i) data[i] = temparray[i];
    delete [] temparray;
    data[count] = arg;

    count = count + 1;

}
