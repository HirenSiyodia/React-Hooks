// Context = global state container for React apps (lighter than Redux for small projects).
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  let userName = "Hello Hiren from Provider";

  return (
    <GlobalContext.Provider value={{ userName }}>
      {children}
    </GlobalContext.Provider>
  );
};

