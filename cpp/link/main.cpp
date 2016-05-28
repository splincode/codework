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
