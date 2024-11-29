import React from "react";

export interface DeviceProps {
  name: string;
  isActive: boolean;
  systemName: string;
}

const Device = ({ name, isActive, systemName }: DeviceProps) => {
  const InactiveDevice = () => {
    return (
      <div className="flex flex-col p-4 gap-2 border rounded-md border-neutral">
        <span className="text-md">{name}</span>
        <span className="text-sm text-neutral">{systemName}</span>
      </div>
    );
  };

  const ActiveDevice = () => {
    return (
      <div className="flex flex-col p-4 gap-2 border rounded-md border-blue-500">
        <span className="text-md font-semibold">{name}</span>
        <span className="text-sm">{systemName}</span>
      </div>
    );
  };

  return isActive ? <ActiveDevice /> : <InactiveDevice />;
};

export default Device;
