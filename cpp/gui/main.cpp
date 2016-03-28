#include "window.h"
#include <QApplication>

int main(int argc, char *argv[]){
    QApplication a(argc, argv);
        Rectangle window;

            // box[title]
            window.setWindowTitle("Ivanov M.A.");

            // box[width х height]
            window.setMinimumSize(250, 80);

            // подставляем текущую дату и время
            window.setDatatime(
               std::string("<div style='margin:0 auto'>")
                 + "<p><b>Time</b>: "

                    // В эту структуру подставляем время
                    + "{{TIME}}"

                 + "</p>"
                 + "<p><b>Data</b>: "

                    // В эту структуру подставляем дату
                    + "{{DATE}}"

                 + "</p></div>"
            );


        window.show();
    return a.exec();
}
