const { app, BrowserWindow} = require('electron');
const path = require("path");
const {startCAN } = require("./can_receiver");

function createWindow() {
    const win = new BrowserWindow( {
        width: 600,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")     
        }
    });
    win.loadFile('index.html');

    startCAN("simulator", (frame) => {
        console.log("CAN frame primljen:", frame);
        win.webContents.send("can-frame", frame);
    });
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if(process.platform != 'darwin') {
        app.quit();
    }
});