import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [save, setSave] = useState(false);
    const [inicied, setInicied] = useState(false);





  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    save,
    setSave,
    inicied,
    setInicied,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validación de children como un nodo React requerido
};

export default AppProvider;
