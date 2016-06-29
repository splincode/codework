#include "ViewLocation.h"

int main(int argc, char *argv[]) {
    QApplication a(argc, argv);

    ViewLocation window("view/index");
    window.size(1024, 520)
          .title("Лямбда-исчисления")
          .show();

    return a.exec();
}
