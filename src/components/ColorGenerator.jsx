import { useState } from "react";

const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
  "#00FFFF", "#000000", "#FFFFFF", "#808080", "#800000",
  "#808000", "#800080", "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export const ColorGenerator = () => {
  const [color, setColor] = useState("#FFFFFF");

  const cambiarColor = () => {
    const nuevoColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setColor(nuevoColor);
    alert(`Color elegido: ${nuevoColor}`);
  };

  return (
    <div style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}>
      <button onClick={cambiarColor}>🎨 Generar Color</button>
    </div>
  );
};


