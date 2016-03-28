#include <QLabel>
#include <QTime>
#include <QDate>
#include <ctime>
#include <iostream>

class Rectangle:public QLabel {

    private:
        int timerId; // setIntervalID
        int nInterval; // время интервала
        QString temp; // строка для замены меток
        QString base_string; // базовый шаблон

        QString str_replace_date(const QString& strText = ""){
            QTime time = QTime::currentTime();

            QDate dateToday = QDate::currentDate();
            QDate d(dateToday.year(), dateToday.month(), dateToday.day());

            QString str = d.toString("dd.MM.yyyy");
            QString t = strText;

            QDate date = QDate::currentDate();
            int day = date.dayOfWeek();
            QString weekDay = QDate::longDayName(day);

            t.replace("{{TIME}}", time.toString());
            t.replace("{{DATE}}", str + " (" + weekDay + ")");

            return t;
        }

    protected:
        virtual void timerEvent(QTimerEvent*){
            // функция исполняемая каждый раз через интервал времени
            setText(str_replace_date(base_string));
        }

    public:

        Rectangle(const QString& strText = "",  int _nInterval = 1000) {
            nInterval = _nInterval; // обновлять слой каждую секунду
            timerId = startTimer(nInterval);
            temp = "";
        }

        ~Rectangle(){
            killTimer(timerId);
        }

        void setDatatime(std::string strText = ""){
            base_string = QString::fromStdString(strText);
            setText(str_replace_date(base_string));
        }
};
