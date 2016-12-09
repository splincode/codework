#include <iostream>
#include "fso.h"

using namespace std;
int main(){

    /* получаем команду от пользователя:
     *  touch - создание файла
     *  read - чтение файла и вывод на экран
     *  write - запись в файл строки
     *  cd - смена директории
     *  rm - удаление файла
     *  exit - завершение работы терминала
    */

    string* result_command; // массив выходных параметров
    while(fso::work){
        result_command = fso::command_line();
        fso::run(
           result_command[0], // команда пользователя
           result_command[1]  // значение команды
        );
    }

   system("pause");
   return 0;
}
