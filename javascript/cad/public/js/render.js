window.remote = require('electron').remote;

var session = require('electron').remote.session;  
var ipcRenderer = require('electron').ipcRenderer;

window.electron = require('electron');
window.Menu = electron.Menu
window.app = require('electron').remote.app;

window.dialog = require('electron').remote.dialog;
window.fs = require('fs'); 