#include <QtWebEngineWidgets/QtWebEngineWidgets>
#include <QString>

class ViewLocation {

    QWebEngineView *view;
    QString index;

public:

    ViewLocation(QString path_page);
    ~ViewLocation();

    ViewLocation& size(int w = 500, int h = 500);
    ViewLocation& title(QString title);
    ViewLocation& show();
};
