#include <iostream>
#include <windows.h>
using namespace std;

// Объявление указателя, обертка для dll функции
typedef int (*bubble_sort)(int *a, int length);

int main(){

    HINSTANCE dllhandle = LoadLibrary(L"vectorfoo.dll");

    if (dllhandle == NULL) {
        cout << "error while loading library" << endl;
        system("pause");
        return 1;
    }

    int size;
    cout << "Enter size vector[int]: "; cin >> size;
    int array[size];

    for(int i=0; i<size; i++) cin >> array[i];

    // функция-обертка
    bubble_sort b_sort = (bubble_sort)GetProcAddress(dllhandle, "sort") ;
    if (b_sort == NULL) {
        cout << "not function" << endl;
        system("pause");
        return 1;
    }

    // используем функцию библиотеки, сортировка
    (*b_sort)(array, size);

    for(int i=0; i<size; i++) cout << array[i] << " ";

    cout << endl;
    system("pause");
    return 0;
}

