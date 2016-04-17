#include <iostream>
#include <biginteger.cpp>

using namespace std;

int main(int argc, char *argv[]) {

    if (argc != 3 && argv[1] != "-n") {
        cout << "неверные входные параметры \n";
        return 0;
    }

    BigInteger n(argv[2]), p, q;

    if (n % 2 == 0 || n == 1) {
        cout << "число не является простым \n";
        return 0;
    }

    q = n.sqrt() + 1;

    BigInteger m;
    bool prm = true;

    // простые делители
    // начинаются с тройки
    // p - простые числа Чена
    // такие простые числа p,
    // что p+2 либо простое,
    // либо полупростое

    for(p = 3; p <= q; ) {

        // все четные делители и все делители,
        // кратные простым числам, могут быть опущены
        if ( ((p != 2) && (p % 2 == 0)) || ((p != 3) && (p % 3 == 0)) || ((p != 7) && (p % 7 == 0)) ) {
            p = p + 2; continue;
        }

        if (n % p == 0) {
            prm = false;
            break;
        }

        p = p + 2;
    }

    if (prm) cout << "число является простым \n";
    else cout << "число не является простым \n";

    return 0;
}
