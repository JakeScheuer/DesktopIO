import { FloppyDiskBack, Pencil } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";

interface Props {
  name: string;
  systemName: string;
  saveName: (systemName: string, name: string) => void;
}

const EditableName = ({ name, systemName, saveName }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const buttonClickedRef = useRef(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleBlur = () => {
    if (buttonClickedRef.current) {
      buttonClickedRef.current = false;
      return;
    }
    if (isEditing) {
      setIsEditing(false);
    }
  };

  const handleButtonPress = () => {
    buttonClickedRef.current = true;
    if (isEditing) {
      saveName(systemName, tempName);
    }
    setIsEditing(!isEditing);
  };

  const EditButton = () => {
    return (
      <label className="swap ml-2">
        <input
          type="checkbox"
          checked={isEditing}
          onChange={handleButtonPress}
        />
        <Pencil size={24} className="swap-off fill-current" />
        <FloppyDiskBack size={24} className="swap-on fill-current" />
      </label>
    );
  };

  const EditName = () => {
    return (
      <div className="flex flex-row items-center m-2">
        <input
          type="text"
          value={tempName}
          className="input w-60 h-10 input-sm"
          onChange={handleTextChange}
          autoFocus
          onBlur={handleBlur}
        />
        <EditButton />
      </div>
    );
  };

  const DisplayName = () => {
    return (
      <div className="flex flex-row items-center m-2">
        <div className="flex h-10 w-60 items-center pl-4">
          <span className="text-md">{name}</span>
        </div>
        <EditButton />
      </div>
    );
  };

  return isEditing ? <EditName /> : <DisplayName />;
};

export default EditableName;
