import React from "react";

export interface DeviceProps {
  name: string;
  isActive: boolean;
  systemName: string;
}

export interface DevicePropsState extends DeviceProps {
  toggleDevice: (systemName: string, required?: boolean) => void;
}

const Device = ({
  name,
  isActive,
  systemName,
  toggleDevice,
}: DevicePropsState) => {
  const InactiveDevice = () => {
    return (
      <div
        className="flex flex-col p-4 gap-2 border rounded-md border-neutral hover:cursor-pointer"
        onClick={() => toggleDevice(systemName)}
      >
        <span className="text-md">{name}</span>
        <span className="text-sm text-neutral">{systemName}</span>
      </div>
    );
  };

  const ActiveDevice = () => {
    return (
      <div
        className="flex flex-col p-4 gap-2 border rounded-md border-blue-500 hover:cursor-pointer"
        onClick={() => toggleDevice(systemName)}
      >
        <span className="text-md font-semibold">{name}</span>
        <span className="text-sm">{systemName}</span>
      </div>
    );
  };

  return isActive ? <ActiveDevice /> : <InactiveDevice />;
};

export default Device;
