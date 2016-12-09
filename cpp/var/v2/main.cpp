#include <iostream>
#include "supertype.h"
using namespace std;

int main(){
    Auto x;

         x = 1; // int
         cout << "x = " << x.get<int>() << endl;

         x = 's'; // char
         cout << "x = " << x.get<char>() << endl;

         x = 3.14; // double, float
         cout << "x = " << x.get<double>() << endl;

         char* text = "hello world"; x = text; // char*
         cout << "x = " << x.get<char*>() << endl;

    return 0;
}
