#include "matrix.h"
#include <iostream>
#include <ctime>
using namespace std;

class ConctructionError{
private:
    string mess;
public:
    ConctructionError(const string& mess) : mess(mess) {
    }
     string const &getMess() const {
        return mess;
    }
};

template <typename type>
Matrix<type>::Matrix(int _m, int _n){
    m = _m;
    n = _n;

    array = new type *[m];
    for (int i=0; i<m; ++i){
      array[i]=new type[n];
      for (int j=0; j<n; ++j) array[i][j]=0;
    }

}

template <typename type>
Matrix<type>::~Matrix(){
    delete [] array;
}


template <typename type>
Matrix<type>& Matrix<type>::print(){

    cout << "[" << m << "x" << n << "]:{" << endl;
    for(int i=0; i<m; ++i){
        for (int j=0; j<n; ++j){
            cout << " " << array[i][j];
            if ((j+1) != n) cout << ",";
        }

        cout << endl;
    }
    cout << "}" << endl;

    return *this;
}

template <typename type>
type& Matrix<type>::operator()(int _m, int _n){

    if ( _m > (m-1) || _n > (n-1)) throw ConctructionError("overflow matrix size");
    else return array[_m][_n];

}

template <typename type>
Matrix<type>& Matrix<type>::fill(bool stdcin){
    if (stdcin) {
        for(int i=0; i<m; ++i){
            for (int j=0; j<n; ++j) {
                cout << "[" << i << "]" << "[" << j << "] = "; cin >> array[i][j];
            }
        }
    } else {
        srand( time( 0 ) ); // автоматическая рандомизация
        for(int i=0; i<m; ++i){
            for (int j=0; j<n; ++j) array[i][j] = rand()  % 10;
        }
    }

    return *this;
}

template <typename type>
Matrix<type>& Matrix<type>::operator= (Matrix<type>& B){
    if (B.m == m && B.n == n){

        for(int i=0; i<m; ++i){
            for (int j=0; j<n; ++j) array[i][j] = B(i, j);
        }

    } else {
      throw ConctructionError("size is not the same");
   }

    return *this;
}

template <typename type>
Matrix<type>& Matrix<type>::operator*(Matrix<type>& B){

    if(n == B.m) {
        int newm = m;
        int newn = B.n;

        type** newarray;

        newarray = new type *[newm];
        for (int i=0; i<newm; ++i){
          newarray[i]=new type[newn];
          for (int j=0; j<newn; ++j) newarray[i][j] = 0;
        }


        for(int i=0; i < newn; i++){
            for(int j=0; j<newn; j++){

                for(int k=0; k < n; k++){
                    newarray[i][j] += array[i][k]*B(k , j);
                }
            }
        }

        delete [] array;

        m = newm;
        n = newn;

        array = new type *[m];
        for (int i=0; i<m; ++i){
          array[i]=new type[n];
          for (int j=0; j<n; ++j) array[i][j]= newarray[i][j];
        }

        delete [] newarray;

        return *this;

    } else throw ConctructionError("you can not multiply");

    return *this;
}

template <typename type>
Matrix<type>& Matrix<type>::operator*(type b){

    for(int i=0; i<m; ++i){
        for (int j=0; j<n; ++j) array[i][j] *= b;
    }

    return *this;
}

template <typename type>
Matrix<type>& Matrix<type>::operator+ (Matrix<type>& B){
    if (B.m == m && B.n == n){

        for(int i=0; i<m; ++i){
            for (int j=0; j<n; ++j) array[i][j] = array[i][j] + B(i, j);
        }

    } else {
        throw ConctructionError("size is not the same");
    }

    return *this;
}

template <typename type>
Matrix<type>& Matrix<type>::operator- (Matrix<type>& B){
    if (B.m == m && B.n == n){

        for(int i=0; i<m; ++i){
            for (int j=0; j<n; ++j) array[i][j] = array[i][j] - B(i, j);
        }

    } else {
        throw ConctructionError("size is not the same");
    }

    return *this;
}

template <typename type>
Matrix<type>& Matrix<type>::transpose(){
    int newm = n;
    int newn = m;

    type** newarray;

    newarray = new type *[newm];
    for (int i=0; i<newm; ++i){
      newarray[i]=new type[newn];
      for (int j=0; j<newn; ++j) newarray[i][j] = array[j][i];
    }

    delete [] array;

    m = newm;
    n = newn;

    array = new type *[m];
    for (int i=0; i<m; ++i){
      array[i]=new type[n];
      for (int j=0; j<n; ++j) array[i][j]= newarray[i][j];
    }

    delete [] newarray;

    return *this;

}

template <typename type>
type& Matrix<type>::det(){

    if (m*n > 9) {
        ConctructionError("I can not find the determinant");
    } else {
       if(m*n == 4) {
           int d = (array[0][0]*array[1][1]) - (array[0][1]*array[1][0]);
           return d;
       } else if (m*n == 9) {

           int d = (
                       (array[0][0] + array[1][1] + array[2][2]) +
                       (array[1][0] + array[2][1] + array[1][1]) +
                       (array[0][1] + array[2][2] + array[2][0])
                   ) - (
                       (array[2][0] + array[1][1] + array[0][2]) +
                       (array[2][1] + array[1][2] + array[0][0]) +
                       (array[1][0] + array[0][1] + array[2][2])
          );

          return d;
       } else ConctructionError("I can not find the determinant");
    }

}

template <typename type>
Matrix<type>& Matrix<type>::inverse(){

    ConctructionError("I can not find the inverse matrix");


    return *this;
}
