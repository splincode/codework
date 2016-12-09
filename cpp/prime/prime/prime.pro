TEMPLATE = app
CONFIG += console c++11
CONFIG -= app_bundle
CONFIG -= qt

SOURCES += main.cpp \
    biginteger.cpp \
    init.cpp

HEADERS += \
    biginteger.h

QMAKE_CXXFLAGS += -funroll-all-loops -funroll-loops
