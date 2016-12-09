#include <iostream>
#include <cstring>
using namespace std;

// перегрузка функции
template<typename T> const char* whichtype(T&) {return "unknown";}
template<> const char* whichtype(int&) {return "int";}
template<> const char* whichtype(float&) {return "float";}
template<> const char* whichtype(double&) {return "double";}
template<> const char* whichtype(char&) {return "char";}

namespace Type {

    class Auto {
        void* value;
        std::string nametype;
    public:

        template <typename type>
        void operator=(type &&val){
            nametype = whichtype(val);
            value = &val;
        }


        template <typename type>
        type& get() {
            type* iout = (type *) value;
            return *iout;
        }

        std::string getType(){
            return nametype;
        }

        friend ostream& operator << (ostream &out, Auto &obj);
    };



    std::ostream& operator<< (std::ostream &out, Auto &obj) {
        char var = obj.getType()[0];

        switch(var){
            case 'i':
             return out << obj.get<int>();
            break;

            case 'd':
             return out << obj.get<double>();
            break;

            case 'c':
              return out << obj.get<char>();
            break;

            case 'u':
              return out << obj.get<char*>();
            break;

        }
    }

    char* toChar(std::string val) {
        char *s = new char[sizeof(val) + 1];
        std::strcpy(s, val.c_str());
        return s;
    }

}
