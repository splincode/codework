#include <iostream>
#include "supertype.h"
using namespace std;

int main(){

    Auto x;

    x = true; // bool
        bool i = x;
        if (i) cout << "i = true" << endl; else cout << "i = false" << endl;
        cout << "x = " << x << endl << endl; // для вывода нужно bool(x)

          // выпадет исключение, если указать не тот тип
          // который был установлен после присвоения
          // cout << "x = " << float(x) << endl;
          // операция не определена


    x = 1; // int
        int zero = x;
        cout << "zero = " << zero - 1 << endl;
        cout << "x = " << int(x) << endl << endl;

    x = 2.14; // float, double
        double pi = x;
        cout << "pi = " << pi + 1 << endl;
        cout << "x = " << double(x) << endl << endl;

    x = 'a'; // char
        char symbol = x;
        cout << "symbol = "  <<  char(symbol + 1) << endl; // b
        cout << "x = " << char(x) << endl << endl;

    x = Auto::str("hello world"); // string
        char* text = x;
        cout << "text = \"" << text << "\"" << endl;
        cout << "x = \"" << text << "\"" << endl << endl;

    cout << "b = ";
        x = "text"; // выпадет исключение
        char* b = x; // или string b = x;
        cout << "b = " << b;

    return 0;
}
