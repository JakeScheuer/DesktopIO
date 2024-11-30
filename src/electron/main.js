import { app, BrowserWindow, ipcMain } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';
import {setPrimaryDisplay} from './displayManager'

// Derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Ensure preload script is set up
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL('http://localhost:3000');

  // Handle IPC request to fetch display information
  ipcMain.handle('get-displays', () => {
    return getAllDisplays()
  });

  // Handle IPC request to set primary display
  ipcMain.handle('set-primary-display', async (_, displayId) => {
    try {
      await setPrimaryDisplay(displayId);
      return { success: true };
    } catch (error) {
      console.error('Failed to set primary display:', error);
      return { success: false, error: error.message };
    }
  });
});