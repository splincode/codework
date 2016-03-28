#include <typeinfo> // Для std::bad_cast
#include <iostream> // std::cout
using namespace std;

class Auto {

    class Void {public: virtual ~Void(){}};
    template <class T>
    class type: public Void {
        T value;
        public:
            type(T arg){value = arg;}
            T get(){return value;}
    };

    Void* value; // void* value;

public:

    template <class T> Auto& operator = (T arg) {
        value = new type<T>(arg); // value = &&arg;
    }

    template <class T> operator T (){
        // T* iout = (T *) value;

        try {

            // преобразуем к базовым типам
            // bool, int, double, float, char, char*

            type<T>& val = dynamic_cast< type<T>& >(*value);
            return val.get();

        } catch (const std::bad_cast& e) {
          // string
          cerr << "операция не определена" << endl;
        }

    }

    friend ostream& operator << (std::ostream &out, Auto &x) {
       out << "указывайте тип (скалярный), если хотите вывести значение";
    }

    static char* str(string text){
        char *result = const_cast<char *>(text.c_str());
        return result;
    }

};
