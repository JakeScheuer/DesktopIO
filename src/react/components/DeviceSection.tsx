import React, { useState } from "react";
import Device, { DeviceProps } from "./Device";

interface DeviceSectionProps {
  name: string;
  devices: DeviceProps[];
}

const DeviceSection = ({ name, devices }: DeviceSectionProps) => {
  const [devicesDisplayed, setDevices] = useState(devices);

  const toggleDevice = (systemName: string, required: boolean = false) => {
    const index = devicesDisplayed.findIndex(
      (it) => it.systemName === systemName
    );
    let updated = [...devicesDisplayed];
    if (required) {
      let devicesActive = 0;
      devicesDisplayed.forEach((it) => it.isActive && devicesActive++);
      if (devicesActive === 1) {
        return;
      }
    }
    updated[index].isActive = !updated[index].isActive;
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default DeviceSection;
