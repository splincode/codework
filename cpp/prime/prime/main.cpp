#include <iostream>
#include <biginteger.cpp>
#include <init.cpp>
using namespace std;

int main(int argc, char *argv[]) {

    // иницилизация программы
    if (!init(argc, argv)) { cout << "неверные входные параметры \n"; return 0; }

    // исходное нат. число
    BigInteger n(argv[2]);
    BigInteger q = n.sqrt() + 1;

    // вероятность того,
    // что число простое
    bool prm = true;

    // исключаем первые простые числа до 1 млрд.
    if (n < 999999999 && n > 1) {

        for (BigInteger i = 2; i <= q; i++)
        if (n % i == 0) { prm = false; break; }

        if (prm) { cout << "число является простым \n"; return 0; }
        else { cout << "число не является простым \n"; return 0; }

    } else if (n == 0 || n == 1)
    { cout << "число не является простым \n"; return 0; }


    // для больших чисел трудные вычисления
    // поэтому выбираем m = 30

    int m = 30;

    // m = 210 = 2*3*5
    // p[0] - первое простое число в промежутке [30..60]
    // p[7] - последнее простое число в промежутке [30..60]
    BigInteger p[8] = {
        31, 37, 41, 43, 51, 53, 57, 59
    };


    while ( p[7] <= q     &&
            n % p[0] != 0  &&
            n % p[1] != 0  &&
            n % p[2] != 0  &&
            n % p[3] != 0  &&
            n % p[4] != 0  &&
            n % p[5] != 0  &&
            n % p[6] != 0  &&
            n % p[7] != 0
    ) {
            p[0] += m;
            p[1] += m;
            p[2] += m;
            p[3] += m;
            p[4] += m;
            p[5] += m;
            p[6] += m;
            p[7] += m;

    }

    if (  p[7] <= q                     ||
          p[0] <= q  && n % p[0] == 0   ||
          p[1] <= q  && n % p[1] == 0   ||
          p[2] <= q  && n % p[2] == 0   ||
          p[3] <= q  && n % p[3] == 0   ||
          p[4] <= q  && n % p[4] == 0   ||
          p[5] <= q  && n % p[5] == 0   ||
          p[6] <= q  && n % p[6] == 0
    ) prm = false;


    if (prm) cout << "число является простым \n";
    else cout << "число не является простым \n";

    return 0;
}
