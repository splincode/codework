#include <QMainWindow>
#include <QWebView>
#include <QUrl>
#include <QCoreApplication>

class MainWindow : public QMainWindow {
 Q_OBJECT;

public:
 explicit MainWindow(QWidget * parent = 0);
 virtual ~MainWindow();
 void setUrl(QString json);

private:
 QWebView *resource;
};
