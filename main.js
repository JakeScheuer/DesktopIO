import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  // Load the React app URL during development
  mainWindow.loadURL("http://localhost:5173");

  // Uncomment for production build
  // mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});