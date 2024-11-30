import { exec } from "child_process";
import { screen } from "electron";

function macOSsetDisplay(displayIndex: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = `
        tell application "System Events"
          set theDisplays to displays
          set mainDisplay to item ${displayIndex + 1} of theDisplays
          set main display to mainDisplay
        end tell
      `;
    exec(`osascript -e '${script}'`, (error) => {
      if (error) {
        reject(new Error("Failed to set primary display on macOS"));
      } else {
        resolve();
      }
    });
  });
}

function windowsSetDisplay(displayId: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const command = `
        Add-Type -TypeDefinition @"
        using System.Runtime.InteropServices;
        public class DisplayConfig {
            [DllImport("user32.dll")]
            public static extern int SetDisplayConfig(uint numPathArrayElements, IntPtr pathArray, uint numModeInfoArrayElements, IntPtr modeArray, uint flags);
        }
        "@ -Language CSharp
        [DisplayConfig]::SetDisplayConfig(0, $null, 0, $null, 0)
      `;
    exec(`PowerShell.exe -Command "${command}"`, (error) => {
      if (error) {
        reject(new Error("Failed to set primary display on Windows"));
      } else {
        resolve();
      }
    });
  });
}

export async function setPrimaryDisplay(displayId: number) {
  const displays = screen.getAllDisplays();
  const targetDisplay = displays.find((d) => d.id === displayId);

  if (!targetDisplay) {
    return { success: false, error: "Display not found" };
  }

  try {
    if (process.platform === "win32") {
      await windowsSetDisplay(targetDisplay.id);
    } else if (process.platform === "darwin") {
      await macOSsetDisplay(displays.indexOf(targetDisplay));
    } else {
      throw new Error("Platform not supported");
    }
    return { success: true };
  } catch (error) {
    console.error("Failed to set primary display:", error);
    return { success: false };
  }
}

export const getAllDisplays = () => {
  // TODO: convert
  return screen.getAllDisplays();
};
