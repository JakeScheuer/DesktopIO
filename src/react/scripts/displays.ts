// TODO change to type that we want. Conversion happens in electron. Type is shared between electron and react as contract.
interface Display {
  id: number;
  bounds: { x: number; y: number; width: number; height: number };
  scaleFactor: number;
  workArea: { x: number; y: number; width: number; height: number };
}

export const getDisplays = async () => {
  const result: Display[] = await window.api.getDisplays();
  return result;
};

export const setPrimaryDisplay = async (displayId: string | null) => {
  if (displayId !== null) {
    const response = await window.api.setPrimaryDisplay(displayId);
    if (response.success) {
      alert(`Display ${displayId} is now the primary display.`);
    } else {
      alert(`Failed to set primary display: ${response.error}`);
    }
  }
};
