import React from "react";
import DeviceSection from "./DeviceSection";
import { DeviceProps } from "./Device";

const DevicesPage = () => {
  const displays: DeviceProps[] = [
    {
      name: "Curved Monitor",
      isActive: true,
      systemName: "Xigbajkhwbelkqwb",
    },
    {
      name: "Living Room TV",
      isActive: false,
      systemName: "nlknlknep",
    },
    {
      name: "VR Headset",
      isActive: false,
      systemName: "787q563agw6q",
    },
  ];

  const audioDevices: DeviceProps[] = [
    {
      name: "Soundbar",
      isActive: false,
      systemName: "yqweyq46we4",
    },
    {
      name: "Headphones",
      isActive: false,
      systemName: "jd6f435f33",
    },

    {
      name: "Speakers",
      isActive: true,
      systemName: "er6uy4w6u46q",
    },

    {
      name: "VR headset",
      isActive: false,
      systemName: "b8sd98b8s9d7",
    },
    {
      name: "Monitor",
      isActive: false,
      systemName: "h6a46h6af4568",
    },
  ];

  const usbDevices: DeviceProps[] = [
    {
      name: "Steering Wheel",
      isActive: false,
      systemName: "9re49qw4",
    },
    {
      name: "Handbrake",
      isActive: false,
      systemName: "6sd4j6s4",
    },
  ];

  return (
    <div className="flex flex-col gap-2 p-2">
      <DeviceSection name={"Displays"} devices={displays} />
      <DeviceSection name={"Audio"} devices={audioDevices} />
      <DeviceSection name={"USB"} devices={usbDevices} />
    </div>
  );
};

export default DevicesPage;
