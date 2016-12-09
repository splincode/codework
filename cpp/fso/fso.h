#include <iostream>
#include <fstream>
#include <iomanip>
#include <stdlib.h>
#include "string.h"
#include <cstdio>
using namespace std;

namespace  fso {

bool work = true; // консоль будет работать до тех пор, пока не вызовем команду exit
string PATH = "D:\\"; // по умолчанию работаем в данной директории
string pseudoPATH = "D:\\"; // по умолчанию работаем в данной директории
string dont = "This command is not known"; // отсутствие в базе знаний команды пользователя
string changeFile = ""; // Текущий выбранный файл для записи


    class file {
      public:

         string fopen(string filename){
             string result; result = "";

             ifstream Exist;
             Exist.open(filename);
             if (Exist) result = "Error.. file already exists";
             else {
               ofstream F;
               F.open(filename, ios::out);
               if (F) result = "The file is created";
               else result = "Error.. file already exists";
             }

             return result;
         }

         string file_put_contents(string value){
             string result; result = "";

             if(changeFile != "") {

                 ofstream f;
                 f.open(changeFile, ios::out);
                    f<<value;
                 f.close();

             } else result = "File not change";

             return result;


         }

         string file_get_contents(string filename){

             setlocale (LC_ALL, "RUS");
             string result; result = "";
             string flow;
             fstream F;

             //открываем файл в режиме чтения
             F.open(filename);

             if (F){
                while (!F.eof()){
                   F>>flow;
                   result += flow + " ";
                }

                F.close();
             } else result = "File does not exist";

             return result;
         }

         string remove(string filename){

             string filepath; filepath = filename;
             string result; result = "";

             char *chrstr = new char[filepath.length() + 1];
             strcpy(chrstr, filepath.c_str());

             if (std::remove(chrstr)==-1) result = "File does not exist";
             else result = "File deleted";

             return result;
         }

         string changefile(string filename){
             string result; result = "";
             changeFile = filename;
             result = "File change";
             return result;
         }
    };


    string trim(string s){
        s.replace(s.find(" "), 1, ""); // отрезаем первый пробел
        return s;
    }

    string* command_line(string path = pseudoPATH){
        string comm; // пользователь вводит свою команду
        string result; // дополнительный параметр команды

            string* array_return = new string[2]; // будем возвращать массив исходных значений

            cout << path << ">"; cin >> comm;

            if (comm == "touch" ||
                comm == "read" ||
                comm == "rm" ||
                comm == "cd" ||
                comm == "change" ||
                comm == "write"
            ) { // если не exit или другие неправильные команды
                // считываем параметр нашей команды
                getline (cin, result);
                array_return[1] = trim(result);
            } else array_return[1] = dont;

            array_return[0] = comm;

        return array_return;
    }

    bool FindWordInString(string str, string word){
      int wordsFound = 0;
       for(string::iterator it = str.begin(); it != str.end(); ++it) {
            if(wordsFound >= word.size())
                return true;

            if(*it == word[wordsFound])
                ++wordsFound;
       }

        return false;
    }

    void cd(string value){
        bool result;

        result = FindWordInString(value, ":");
        char endSymbol = value[value.size() - 1];
        if (result) {
            PATH = value;
            if (endSymbol != '\\') PATH = PATH + "\\";
            pseudoPATH = value;
        }
        else {
            PATH = PATH + value;
            if (endSymbol != '\\') PATH = PATH + "\\";
            pseudoPATH = pseudoPATH + value;
        }
    }

    void run(string command, string value = ""){
        file fp; // создаем объект для работы с файлами
        string pathfile; pathfile = PATH + value;
        string text; text = ""; // результат работы

        // исходя из заданной команды запускаем свой процесс
        if (value == dont &&  command != "exit") text = dont;

        if (command == "read")
            text = fp.file_get_contents(pathfile);

        if (command == "rm")
            text = fp.remove(pathfile);

        if (command == "touch")
            text = fp.fopen(pathfile);

        if (command == "change")
            text = fp.changefile(pathfile);

        if (command == "write")
            text = fp.file_put_contents(value);

        if (command == "cd")
            fso::cd(value);

        if (command == "exit") work = false;

        if (text != "") cout << text << endl << endl;
    }
}

