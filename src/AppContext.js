import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const [person, setPerson] = useState(0);
  const value = {
    person,
    setPerson,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
export { AppProvider };
