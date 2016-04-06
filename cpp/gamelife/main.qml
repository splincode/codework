import QtQuick 2.3
import QtQuick.Window 2.2
//Будем использовать вертикальный лейаут
import QtQuick.Layouts 1.1
import QtQuick.Dialogs 1.2

Window {
    visible: true

    //Этот лейаут расположит все дочерние
    //элементы по вертикали друг над другом
    ColumnLayout {
        //Отступ между элементами (кнопками)
        spacing: 5

        //Наш ColumnLayout будет вписан в
        //окно приложения с отступами по 5
        //со всех сторон
        anchors.fill: parent
        anchors.margins: 5

        MyButton {
                   Layout.fillHeight: true
                   Layout.fillWidth: true
                   color: "green"
                   text: "Hello, world!"
                   onClicked: messageDialog.visible = true;
               }

               MyButton {
                   Layout.fillHeight: true
                   Layout.fillWidth: true
                   color: "blue"
                   text: "Some button"
               }

               MyButton {
                   Layout.fillHeight: true
                   Layout.fillWidth: true
                   text: "Quit"
                   onClicked: Qt.quit()
               }


    }



    MessageDialog {
        id: messageDialog
        title: "Qt"
        text: "Hello, world!"
    }
}
