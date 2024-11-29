import React from "react";
import Device, { DeviceProps } from "./Device";

interface DeviceSectionProps {
  name: string;
  devices: DeviceProps[];
}

const DeviceSection = ({ name, devices }: DeviceSectionProps) => {
  return (
    <div className="flex flex-col p-4 gap-4 border rounded-sm">
      <span className="text-lg underline">{name}</span>
      <div className="flex flex-col m-2 gap-2">
        {devices.map((d: DeviceProps, i: number) => {
          return (
            <Device
              key={i}
              name={d.name}
              isActive={d.isActive}
              systemName={d.systemName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DeviceSection;
