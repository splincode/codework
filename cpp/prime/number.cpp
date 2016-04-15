#include "number.h"
#include <iostream>
#include <stdio.h>
#include <string.h>
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

ostream& operator<<(ostream& out, const Number &obj) {

    for(int i=0; i < obj.length(); i++) {
       out << obj[i];
    }

}
