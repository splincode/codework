#include <iostream>
using namespace std;

void virus(){ cout << "выполнился вредоносный код" << endl;}
int max(int a, int b){return a >= b ? a : b;}

void foo(){
    cout << "foo" << endl;
    int n = 5;

    void* a[5];
    a[11] = (void*) (&virus); // вышли за пределы памяти
}

int main(){

    cout << "max number(1, 2) = " << max(1, 2) << endl;
    foo();
    return 0;
}
