import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
  test: () => console.log("Electron API exposed"),
});
