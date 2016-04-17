#include <iostream>
#include <biginteger.cpp>
using namespace std;

int main(int argc, char *argv[]) {
    char *text = "77";
    BigInteger n(text), k("3"), q;

    if (n % 2 == 0 || n == 1) {
        cout << "число не является простым" << endl;
        return 0;
    }

    q = n.sqrt() + 1;

    BigInteger m;
    bool prm = true;
    while(k <= q){

        if (k % 2 == 0) { k++; continue; } // отсеиваем четные делители

        m = n%k;
        cout << "n = " << n << " k = " << k << ", n % k = " << m <<endl;

        if (n % k == 0) {
            prm = false;
            break;
        }

        k++;
    }

    if (prm) cout << "число является простым" << endl;
    else cout << "число не является простым" << endl;
    //cout << "количество итераций: " << k << endl;

    return 0;
}
