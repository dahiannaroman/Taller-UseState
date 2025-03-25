import { useState } from "react";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)} 
      style={{ background: darkMode ? "#000" : "#FFF", color: darkMode ? "#FFF" : "#000" }}>
      {darkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};


