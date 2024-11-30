import React from "react";
import EditableName from "./EditableName";

export interface DeviceProps {
  name: string;
  isActive: boolean;
  systemName: string;
}

export interface DevicePropsState extends DeviceProps {
  toggleDevice: (systemName: string, required?: boolean) => void;
  saveName: (systemName: string, name: string) => void;
}

const Device = ({
  name,
  isActive,
  systemName,
  toggleDevice,
  saveName,
}: DevicePropsState) => {
  const ToggleButton = () => {
    return (
      <input
        type="checkbox"
        className="toggle toggle-success"
        checked={isActive}
        onChange={() => toggleDevice(systemName)}
      />
    );
  };

  const InactiveDevice = () => {
    return (
      <div className="flex flex-row p-4 gap-2 border rounded-md border-neutral items-center">
        <ToggleButton />
        <div className="flex flex-col">
          <EditableName
            name={name}
            systemName={systemName}
            saveName={saveName}
          />
          <span className="text-xs pl-6">{systemName}</span>
        </div>
      </div>
    );
  };

  const ActiveDevice = () => {
    return (
      <div className="flex flex-row p-4 gap-2 border rounded-md border-blue-500 items-center">
        <ToggleButton />
        <div className="flex flex-col">
          <EditableName
            name={name}
            systemName={systemName}
            saveName={saveName}
          />
          <span className="text-xs pl-6">{systemName}</span>
        </div>
      </div>
    );
  };

  return isActive ? <ActiveDevice /> : <InactiveDevice />;
};

export default Device;
