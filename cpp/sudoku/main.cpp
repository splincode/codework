#include "viewlocation.h"

int main(int argc, char *argv[]) {
    QApplication a(argc, argv);

    ViewLocation window("view/interface");
    window.size(1024, 620)
          .title("Решатель судоку")
          .show();

    return a.exec();
}
