TARGET = lambda
TEMPLATE = app
SOURCES = main.cpp \
    viewlocation.cpp

QT = core gui
QT += webenginewidgets
QT += webengine webenginewidgets

RESOURCES += \
    app.qrc

HEADERS += \
    ViewLocation.h \
    viewlocation.h

