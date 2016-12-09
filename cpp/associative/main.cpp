#include <iostream>
#include "associative.cpp"

using namespace std;

int main(){

    Vector<int> array;

    array["Russia"] = 1;
    array["France"] = 2;
    array["France"] = 3;
    array["Germany"] = 4;

    cout << "array(int){" << endl << endl;
    for (int &i = array.iterator(); i < array.end(); i++){
        cout << "\"" <<

               array.keyname()

         << "\"" << " => " << "\"" <<

               array.val()

        << "\"";

        if ((i + 1) != array.end()) cout << ",";
        cout << endl;
    }; cout << endl << "}" << endl << endl;

    system("pause");
    return 0;
}

