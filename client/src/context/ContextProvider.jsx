import { createContext, useState } from "react";

const loginContext = createContext(null);

const ContextProvider = ({ childern }) => {
  const [account, setAccount] = useState("");

  return (
    <loginContext.Provider value={{ account, setAccount }}>
      {childern}
    </loginContext.Provider>
  );
};

export default ContextProvider;
