#include <iostream>
using namespace std;

template <class T>
class Memory {
public:

    void* operator new(size_t size, int mysize){
        cout << mysize << endl;
    }

};

int main(int argc, char *argv[]){


    // классическое создание
    // динамического массива

    int* array = new int[5];
    array[0] = 1;
    array[1] = 2;

    for(int i = 0; i<10; i++){
       cout << "| " << array[i] << " ";
    }


    cout << endl;

    // Memory

    Memory<int> *array2 = new(5) Memory<int>;

    return 0;
}
