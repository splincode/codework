#include <QtWebEngineWidgets/QtWebEngineWidgets>
#include <QDesktopWidget>
#include <QApplication>
#include <QResource>
#include <QWidget>

int main(int argc, char *argv[]) {

    // инициализация окна
    QApplication a(argc, argv);
    QWebEngineView *view = new QWebEngineView();

    // размеры окна
    int WIDTH = 1024;
    int HEIGHT = 520;

    // размеры Desktop
    int screenWidth;
    int screenHeight;

    // centered
    int x, y;

    // расчет значений Desktop
    QDesktopWidget *desktop = QApplication::desktop();
    screenWidth = desktop->width();
    screenHeight = desktop->height();

    // новые значения
    x = (screenWidth - WIDTH) / 2;
    y = (screenHeight - HEIGHT) / 2;

    // центрируем window
    view->resize(WIDTH, HEIGHT);
    view->move(x, y);

    // title window
    view->setWindowTitle("Переводчик");

    // отключаем ненужные Qt события
    view->setContextMenuPolicy(Qt::CustomContextMenu);

    // подгружаем визуализацию
    view->load(QUrl("qrc:html/index.html"));
    view->show();

    return a.exec();
}
