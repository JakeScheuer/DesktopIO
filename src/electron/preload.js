import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getDisplays: async () => ipcRenderer.invoke('get-displays'),
  setPrimaryDisplay: async (displayId) => ipcRenderer.invoke('set-primary-display', displayId),
});
