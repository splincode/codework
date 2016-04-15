#include <iostream>
#include <number.h>

using namespace std;
int main(int argc, char *argv[]){


    if (argc < 3 && argv[1] != "-n") {

        cout << "NAME" << endl
             << "\t prime - проверка на простоту " << endl
             << "SYNOPSIS" << endl
             << "\t prime [ключи]... [значения]... " << endl
             << "DESCRIPTION" << endl
             << "\t -n " << endl
             << "\t   вводим число, которое будет проверено на простоту" << endl;

        return 0;

    } // ./prime -n 123..

    Number n; // натуральное число
    n = argv[2];


    cout << n << endl;



      /*  string number = argv[2];

        auto len = number.length(); // размер числа
        char end = (int)(number[len-1]); // на какую цифру заканчивается число


        if (len < 2 && (end == '0' || end == '1' || end == '4' || end == '6' || end == '8')) {

            cout << "число не является простым" << endl;

        } else if (len > 1 && (end == '0' || end == '2' || end == '5' || end == '4' || end == '6' || end == '8')) {

            cout << "число не является простым" << endl;

        } else {

            // определяем простоту
            cout << "исследуем" << endl;
        } */

    return 0;
}
