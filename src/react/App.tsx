import React, { useEffect, useState } from "react";
import DevicesPage from "./components/DevicesPage";
import { getDisplays } from "./scripts/displays";

const App: React.FC = () => {
  // TODO - pass in displays to page.
  const [displays, setDisplays] = useState<any>([]);

  useEffect(() => {
    const fetchDisplays = async () => {
      const result = await getDisplays();
      setDisplays(result);
    };
    fetchDisplays();
  }, []);

  return (
    <div>
      <DevicesPage />
    </div>
  );
};

export default App;
