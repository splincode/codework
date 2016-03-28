#include "matrix.cpp"
#include <iostream>
using namespace std;


int main(){

    Matrix<int> A(2, 2), B(3, 3); // инициализация, по умолчанию нули
    try {

        A.fill().print();  cout << endl; // рандомное заполнение
        B.fill().print();  cout << endl;


    } catch(ConctructionError err){
      cout << err.getMess() << endl;
    };

    system("pause");
    return 0;
}
