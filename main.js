const { app, BrowserWindow, protocol } = require("electron");
const url = require("url");
const path = require("path");
const { session } = require("electron");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "AI Compiler for NPU",
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false, // Disable web security
    },
  });

  mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, "./app/build/index.html"),
    protocol: "file:",
    slashes: true,
  });

  console.log("Start URL:", startUrl); // Log the start URL to the console

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(() => {
  // Register the file protocol
  protocol.registerFileProtocol("file", (request, callback) => {
    const url = request.url.substr(7); // Strip off 'file://'
    callback({ path: path.normalize(`${__dirname}/${url}`) });
  });

  createMainWindow();
});

// Quit the app when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Create a new window if the app is activated (for macOS)
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
