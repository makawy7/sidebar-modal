import { createContext, useState } from "react";

export const MyContext = createContext();

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

export default Context;
