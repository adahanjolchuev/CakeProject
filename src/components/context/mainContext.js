import { createContext, useContext, useEffect, useState } from "react";

const mainContext = createContext();
export const useMainContext = () => useContext(mainContext);

function MainContext({ children }) {
  const [modal, setToModal] = useState(false);
  const [load, setLoad] = useState(false);

  const values = {
    modal,
    setToModal,
    load,
    setLoad,
    Loader,
  };

  function Loader() {
    setTimeout(() => {
      setLoad(!load);
    }, 700);
  }

  useEffect(() => {
    Loader();
  }, []);

  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}
export default MainContext;
