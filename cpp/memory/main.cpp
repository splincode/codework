#include <iostream>
#include <memory.h>
#include <ctime>
using namespace std;

int main(int argc, char *argv[]){

    unsigned int start_time =  clock(); // начальное время
    // классическое создание
    // динамического массива

    int* array = new int[5];
    for (int i = 0; i < 5; i++) array[i] = i+1;
    array[10] = 8;

    array[5] = 20;


    cout << "I. Классический способ выделения памяти" << endl;
    cout << "array (sizeof = " << sizeof(array) << "):" << endl;
    for(int i = 0; i<=10; i++) {
        cout << "[" << i << ", " << &array[i] << "] = " << array[i];
        if (i > 5) {cout << ", выход за пределы выделенной памяти"; }
        cout << endl;
    }

    cout << endl;
    delete [] array;

    cout << "после очистки [2] = " << array[2] << endl; // мусор

    unsigned int end_time = clock(); // конечное время
    unsigned int search_time = end_time - start_time; // искомое время
    cout << "Время выполнения: " << search_time << "мс" << endl << endl;



    /*******************************************************************/



    // через класс Memory
    start_time =  clock(); // начальное время
    Memory<int> array2;
    array2 = {1, 2, 3, 4, 5}; // size = 5
    array2.push(20);

    array2[10] = 8; // вышли за пределы памяти

    cout << "II. Через перегрузка оператора" << endl;
    cout << "array2 (sizeof = " << sizeof(array2) << "):" << endl;
    for(int i = 0; i<=10; i++) {
      cout << "[" << i << ", " << &array2[i] << "] = " << array2[i];
      if (i > array2.getsize()) {cout << ", выход за пределы выделенной памяти"; }
      cout << endl;
    }

    cout << endl;
    array2.deletememory();

    cout << "после очистки [2] = " << array2[2] << endl; // мусор

    end_time = clock(); // конечное время
    search_time = end_time - start_time; // искомое время
    cout << "Время выполнения: " << search_time << "мс" << endl << endl;



    return 0;
}
