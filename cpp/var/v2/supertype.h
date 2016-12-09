#include <iostream>
#include <typeinfo>
#include <cstring>
using namespace std;

class Auto {
    void* value;
public:

    template <typename type>
    void operator=(type &&val){
        value = &val;
    }

    template <typename type>
    type& get() {
        type* iout = (type *) value;
        return *iout;
    }
};
