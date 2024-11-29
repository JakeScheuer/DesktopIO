import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';

// Derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL('http://localhost:3000'); // Replace with your app's URL
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});