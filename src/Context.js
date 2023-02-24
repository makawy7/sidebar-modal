import { createContext, useContext, useState } from "react";

const MyContext = createContext();

function Context({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [showSide, setShowSide] = useState(false);

  return (
    <MyContext.Provider
      value={{ showModal, setShowModal, showSide, setShowSide }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useAppContext = () => useContext(MyContext);
export default Context;
