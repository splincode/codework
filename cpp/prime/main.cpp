#include <iostream>
#include "number.h"
#include "check.cpp"

using namespace std;
int main(int argc, char *argv[]){

    if (!check(argc, argv)) { return 0; }

    Number n; // натуральное число
    n = argv[2];

    int count = 6; // количество аргументов

    // проверка: на какую цифру оканчивается число
    if (n.length() < 2 && n.ending(count, 0, 1, 4, 6, 8)) {

        cout << "число не является простым" << endl;

    } else if (n.length() > 1 && n.ending(count+1, 0, 2, 5, 4, 6, 8)) {

        cout << "число не является простым" << endl;
        return 0;

    }


    if ( (n.length() > 1 && (n.div(3) || n.div(9))) ||
         (n.length() > 2 && ( n.div(11) ))
    ) {

        // если число делится на одно из [3, 7 .., 101]
        cout << "число не является простым" << endl;
        return 0;

    }

    // исследуем дальше



    return 0;
}
