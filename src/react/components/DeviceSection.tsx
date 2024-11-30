import React, { useState } from "react";
import Device, { DeviceProps } from "./Device";

interface DeviceSectionProps {
  name: string;
  devices: DeviceProps[];
}

const DeviceSection = ({ name, devices }: DeviceSectionProps) => {
  const [devicesDisplayed, setDevices] = useState(devices);

  const toggleDevice = (systemName: string, required: boolean = false) => {
    let updated = [...devicesDisplayed];
    const index = updated.findIndex((it) => it.systemName === systemName);
    if (required) {
      let devicesActive = 0;
      updated.forEach((it) => it.isActive && devicesActive++);
      if (devicesActive === 1) {
        return;
      }
    }
    updated[index].isActive = !updated[index].isActive;
    setDevices(updated);
  };

  const saveName = (systemName: string, name: string) => {
    let updated = [...devicesDisplayed];
    const index = updated.findIndex((it) => it.systemName === systemName);
    updated[index].name = name;
    setDevices(updated);
  };

  return (
    <div className="flex flex-col p-4 gap-4 border rounded-md">
      <span className="text-lg underline">{name}</span>
      <div className="flex flex-col m-2 gap-2">
        {devicesDisplayed.map((d: DeviceProps, i: number) => {
          return (
            <Device
              key={i}
              name={d.name}
              isActive={d.isActive}
              systemName={d.systemName}
              toggleDevice={toggleDevice}
              saveName={saveName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DeviceSection;
