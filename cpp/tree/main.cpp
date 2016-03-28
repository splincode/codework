#include "window.h"
#include <iostream>
#include <QApplication>
#include <QCoreApplication>
#include <QWebView>
#include "tree.h"

using namespace std;
MainWindow::MainWindow(QWidget *parent): QMainWindow(parent){}
MainWindow::~MainWindow(){}

void MainWindow::setUrl(QString json){
    resource = new QWebView(this);
    resource->setGeometry(0,0,800,500);
    resource->load(QUrl("http://splincode.ru/tester/tree/?data=" + json));
}



int main(int argc, char *argv[]){

    // настройка дерева данных
    Tree<int> tree('A', 20);

    tree.node('A')
        .left('B', 12)
        .right('C', 25);

    tree.node('C')
        .left('D', 22)
        .right('E', 32);

    tree.node('B')
            .left('F', 5);

    tree.node('F')
            .left('G', 0);



   // формирование данных для обработки на сервере
   string json = tree.output();
   QString
      qstr = QString::fromStdString(json);

   // оконное отображение
   QApplication app(argc, argv);
   MainWindow window;
    window.setFixedSize(800, 500);
    window.setUrl(qstr);
    window.show();
   return app.exec();

}






