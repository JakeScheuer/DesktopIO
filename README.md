# Electron React App

The main use of this project is to create a IO controller for desktop. More details below.
If you want to just create a different appliction using the same stack, start with the branch `boilerplate`.
The stack uses electron to interact with the OS, and react for the UI.
UI comes configured with React 18, Tailwind CSS, Dasiy UI, and Vite.

To run start react server, then electron app:
`npm run react`
`npm run electron`

By default when the react app runs, it opens in a browser window. To turn this off see comment in `vite.config.ts`

# IO Controller

Managing IO in Windows can be annoying. I often switch between displays, audio outputs, and other perephrials and wanted a easier way to do so. This project is to make a simple interface where you can configure different setups and manage your devices in a single window.

## Features Planned

### Displays

- View Displays Available
- Highlight Active Display
- Switch Between Displays
- Label / Rename Devices

### Audio

- View Audio Devices
- Highlight Active
- Switch Between
- Label / Rename Devices

### Custom Configurations

- Create AV Setups/ Configs
- Example: Sim Setup, TV Setup, Gaming Setup

### Bluetooth

- View Bluetooth Devices
- Add device
- Remove device
- Label device

### USB

- View USB Devices
- Label Device
- Disable Device
- Enable Device
