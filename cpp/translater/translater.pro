QT       += core gui
QT += webenginewidgets

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = translater
TEMPLATE = app

SOURCES += main.cpp

DISTFILES += \
    index.html

RESOURCES     = app.qrc
