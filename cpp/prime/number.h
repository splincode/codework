#include <iostream>
using namespace std;

class Number {
    int len = 0;
    int* list;

public:

    Number();
    void operator = (char* val);
    int operator [] (int i) const;
    int length() const;
    friend std::ostream& operator<<(std::ostream& out, const Number &obj);

};
