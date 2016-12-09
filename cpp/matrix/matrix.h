template <class type>
class Matrix {
     int m, n; // размерность
     type **array; // выделение памяти

  public:
      Matrix (int _m = 3, int _n = 3);
      ~Matrix();

      Matrix<type>& print(); // вывод на экране матрицы
      Matrix<type>& fill(bool stdcin = false); // рандомное заполнение - fill(), вызов оператора cin - fill(true)
      Matrix<type>& operator= (Matrix<type>& B); // A = ..
      Matrix<type>& operator+ (Matrix<type>& B); // A + B
      Matrix<type>& operator- (Matrix<type>& B); // A - B
      Matrix<type>& operator* (Matrix<type>& B); // A * B
      Matrix<type>& operator* (type b); // A * 3
      Matrix<type>& transpose(); // транспонирование матрицы
      type& det(); // определитель матрицы
      Matrix<type>& inverse(); // обратная матрица
      type& operator()(int _m = 0, int _n = 0); // A(x, y)

};
