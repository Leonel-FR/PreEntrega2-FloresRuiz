import ThemeContext from "./ThemeContext";
import { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkmode] = useState(false);

  const ToggleDarkmode = () => {
    setDarkmode((prevMode) => !prevMode);
  };

  const mostrarMensaje = () => {
    alert("Hola desde el contexto");
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkmode,
        ToggleDarkmode,
        mostrarMensaje,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
