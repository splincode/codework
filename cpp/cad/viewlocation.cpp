#include <QtWebEngineWidgets/QtWebEngineWidgets>
#include <QString>
#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QtWebEngine>
#include <QDebug>

#include "viewlocation.h"

ViewLocation::ViewLocation(QString path_page){
    view = new QWebEngineView();
    index = path_page;
}

ViewLocation& ViewLocation::size(int w, int h){

    int WIDTH = w;
    int HEIGHT = h;

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

    view->resize(WIDTH, HEIGHT);
    view->move(x, y);

    return *this;
}

ViewLocation& ViewLocation::title(QString title){
    view->setWindowTitle(title);

    return *this;
}

ViewLocation& ViewLocation::show(){
    view->setContextMenuPolicy(Qt::CustomContextMenu);
    QtWebEngine::initialize();
    view->load(QUrl("qrc:" + index + ".html"));
    view->show();

    return *this;
}

ViewLocation::~ViewLocation(){
    delete view;
}
