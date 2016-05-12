#include <iostream>
#include <memory.h>
#include <ctime>
using namespace std;

int main(int argc, char *argv[]){

    unsigned int start_time =  clock(); // начальное время
    // классическое создание
    // динамического массива

    int* array = new int[5];
    array[0] = 1;
    array[1] = 2;
    array[8] = 7; // последний выделенный участок

    cout << "I. Классический способ" << endl;
    cout << "array:" << endl;
    for(int i = 0; i<=10; i++) {
        cout << "[" << i << ", " << &array[i] << "] = " << array[i] << endl;
    }
    cout << endl;
    unsigned int end_time = clock(); // конечное время
    unsigned int search_time = end_time - start_time; // искомое время
    cout << "Время выполнения: " << search_time << "мс" << endl << endl;



    /*******************************************************************/



    // через класс Memory
    start_time =  clock(); // начальное время
    cout << "II. Перегрузка оператора" << endl;
    cout << "array2:" << endl;

    Memory<int> array2 = Memory<int>(5);
    array2 = {1, 2, 3, 4, 5};
    for(int i = 0; i<=10; i++) {
      cout << "[" << i << ", " << &array2(i) << "] = " << array2[i] << endl;
    }

    end_time = clock(); // конечное время
    search_time = end_time - start_time; // искомое время
    cout << "Время выполнения: " << search_time << "мс" << endl << endl;


    return 0;
}
