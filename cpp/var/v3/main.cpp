#include <iostream>
#include "supertype.h"
using namespace std;
using namespace Type;

int main(){
    Auto x;

         x = 1; // int
         cout << "x = " << x << endl;

         x = 's'; // char
         cout << "x = " << x << endl;

         x = 3.14; // double, float
         cout << "x = " << x << endl;

         x = Type::toChar("hello world");
         cout << "x = " << x << endl;

    return 0;
}
