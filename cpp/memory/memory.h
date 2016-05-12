#include <initializer_list>
#include <new>
#include <iostream>
using namespace std;

template <typename T>
class Memory {

    T* val;
    int size = 0;

public:
    Memory(){}
    Memory(int _size): size(_size-1){}

    void operator = (std::initializer_list<T> ints) {

        val = (T*) std::malloc((ints.size()-1)*sizeof(T));
        if(val) {
          size = 0;
          for (auto x : ints) {
             val[size] = x;
             size++;
          }

        }

    }

    T& operator [](int i){
        T* ptr = val;

        for (int j = 0; j < i; j++){
            if (i == j) break;
            ptr++;
        }

        return *ptr;
    }

    void push (T arg){

        T temp[size+1];

        if(val) {

          int newsize = 0;
          for (int i = 0 ; i < size; i++) {
             temp[newsize] = val[newsize];
             newsize++;
          }

          newsize++;
          temp[newsize-1] = arg;
          size = newsize;

          val = (T*) std::malloc(size*sizeof(T));

          for (int i = 0 ; i < size; i++) {
             val[i] = temp[i];
          }

         }

    }

    void deletememory(){

       for (int i = 0 ; i < size; i++) {val[i] = 0;}
       size = 0;

    }

    int getsize() const {
        return size-1;
    }

};
