import { FloppyDiskBack, Pencil } from "@phosphor-icons/react";
import React, { useState, useRef } from "react";

interface Props {
  name: string;
  systemName: string;
  saveName: (systemName: string, name: string) => void;
}

const EditableName = ({ name, systemName, saveName }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (buttonRef.current && buttonRef.current.contains(e.relatedTarget)) {
      return;
    }
    setIsEditing(false);
    setTempName(name);
  };

  const handleSave = () => {
    saveName(systemName, tempName);
    setIsEditing(false);
  };

  const handleEditButton = () => {
    setIsEditing(true);
  };

  const EditButton = () => (
    <button
      ref={buttonRef}
      className="ml-2"
      onClick={isEditing ? handleSave : handleEditButton}
      aria-label={isEditing ? "Save" : "Edit"}
    >
      {isEditing ? (
        <FloppyDiskBack size={24} className="fill-current" />
      ) : (
        <Pencil size={24} className="fill-current" />
      )}
    </button>
  );

  const EditName = () => (
    <div className="flex flex-row items-center m-2">
      <input
        type="text"
        value={tempName}
        className="input w-60 h-10 input-sm"
        onChange={handleTextChange}
        onBlur={handleBlur}
        autoFocus
      />
      <EditButton />
    </div>
  );

  const DisplayName = () => (
    <div className="flex flex-row items-center m-2">
      <div className="flex h-10 w-60 items-center pl-4">
        <span className="text-md">{name}</span>
      </div>
      <EditButton />
    </div>
  );

  return isEditing ? <EditName /> : <DisplayName />;
};

export default EditableName;
