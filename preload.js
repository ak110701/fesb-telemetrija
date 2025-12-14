const {contextBridge, ipcRenderer} = require("electron");
contextBridge.exposeInMainWorld("electronAPI", {
    onFrame: (callback) => ipcRenderer.on("can-frame", (event, frame) => callback(frame))
});