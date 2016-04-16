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

    bool ending(int n_args, ...);
    bool div(int arg);

    friend std::ostream& operator<<(std::ostream& out, const Number &obj);

};
