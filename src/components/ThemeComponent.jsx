import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const ThemeComponent = () => {
  const { darkMode, setDarkmode, mostrarMensaje, ToggleDarkmode } =
    useContext(ThemeContext);

  mostrarMensaje();
  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <button onClick={ToggleDarkmode}></button>
      <p
        style={{
          background: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        nfinrgnqengnqwgniqnrgjnqjknrvnqengjqretqvqrvqnrjvknqnrtvqntvnqknretvjknqrtknknr
      </p>
    </div>
  );
};

export default ThemeComponent;
