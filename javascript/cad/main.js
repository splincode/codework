const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const os = require('os').platform()

const {ipcMain, dialog, session} = require('electron');

var fs = require('fs');

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1024, 
    height: 620, 
    fullscreen: true, 
    icon: __dirname + '/favicon/favicon' + (os == 'linux' ? '.png' : '.ico') 
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'public/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Дебаг
  //mainWindow.webContents.openDevTools()

  // Событие, когда закрылось окно
  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow.setMinimumSize(720, 620);

}


app.setName('САПР');

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('ready', function () {

    const menuTemplate = [
        {
            label: 'Система автоматизированного проектирования',
            submenu: [
            {
                label: 'Полноэкранный режим',
                role: 'togglefullscreen',
                accelerator: 'F11',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                type: 'separator'
            }, {
                label: 'Выход из программы',
                accelerator: 'CmdOrCtrl+Q',
                click: () => {
                    app.quit();
                }
            }
        ]
        }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
})