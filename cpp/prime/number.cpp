#include "number.h"
#include <iostream>
#include <stdio.h>
#include <string.h>
#include <stdarg.h>

using namespace std;

Number::Number(){}

void Number::operator = (char* val) {

    len = strlen(val);
    list = new int[len];

    for(int i=0; i < len; ++i) {
        list[i] = val[i] - '0';
    }

}

int Number::operator [] (int i) const {

    return list[i];

}

int Number::length() const {

    return len;

}

bool Number::ending(int n_args, ...) {

    int end = list[len-1];
    int count = 0;

    va_list ap;
    va_start(ap, n_args);

    int a = va_arg(ap, int);

    for(int i = 2; i <= n_args; i++) {
       if (end == a) {
           return true;
       }

       a = va_arg(ap, int);
    }

    va_end(ap);

    return false;
}

bool Number::div(int arg) {

    long long sum = 0;
    long long sum_even = 0;
    long long sum_odd = 0;

    switch(arg){
        case 3:

            // деление на 3
            for(int i=0; i < len; ++i) {
                sum += list[i];
            }

            if (sum % 3 == 0) return true;

        break;

        case 9:

            // деление на 9
            for(int i=0; i < len; ++i) {
                sum += list[i];
            }

            if (sum % 9 == 0) return true;

        break;

        case 11:

            // деление на 11
            for(int i=0; i < len; ++i) {
                if (i % 2 == 0) {
                    // сумма нечетных
                    sum_odd += list[i];
                } else {
                    // сумма четных
                    sum_even += list[i];
                }

                if (sum_odd == sum_even || (sum_odd % 11 == 0)) {
                    return true;
                }

            }

        break;

        default:
        break;
    }


    return false;
}

ostream& operator<<(ostream& out, const Number &obj) {

    for(int i=0; i < obj.length(); i++) {
       out << obj[i];
    }

    return out;

}
