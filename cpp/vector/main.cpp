#include <iostream>
#include "vector.cpp"
using namespace std;

int main(){

    Vector<int> a(15);
    a.fill(0); // обнуление массива-вектора

    cout << "Vector a {" << endl;
        a.print();
    cout << "}" << endl;

    system("pause");
    return 0;

}
