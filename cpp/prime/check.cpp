bool check(int argc, char *argv[]){

    if ((argc < 3 || argc > 3) && argv[1] != "-n") {

        cout << "NAME" << endl
             << "\t prime - проверка на простоту " << endl
             << "SYNOPSIS" << endl
             << "\t prime [ключи]... [значения]... " << endl
             << "DESCRIPTION" << endl
             << "\t -n " << endl
             << "\t   вводим число, которое будет проверено на простоту" << endl;

        return false;

    }

    return true;
}
