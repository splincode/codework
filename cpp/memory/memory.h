#include <initializer_list>
#include <new>

template <typename T>
class Memory {

    T* val;
    int size = 0;

public:
    Memory(int _size): size(_size){}

    void operator = (std::initializer_list<T> ints) {

        void *p = malloc(size);
        if (p == NULL) {throw std::bad_alloc();}

        val = (T*) std::malloc(4*sizeof(T));
        if(val) {
          size = 0;
          for (auto x : ints) {
             val[size] = x;
             size++;
          }

        }

    }

    T operator[](int i){
        // либо можно сделать вызов исключения
        if (i > size) val[i] = 0;
        return val[i];
    }

    T& operator ()(int i){
        T* ptr = val;

        while (ptr != NULL) {
            ptr++;
        }

        return *ptr;
    }


    int get() const {
        return size;
    }

};
