#include "viewlocation.h"

int main(int argc, char *argv[]) {
    QApplication a(argc, argv);

    ViewLocation window("index.min");
    window.size(1024, 620)
          .title("САПР")
          .show();

    return a.exec();
}
