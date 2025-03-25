import { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <h2>⏳ Contador: {seconds} segundos</h2>
      <button onClick={() => setIsRunning(true)}>Iniciar</button>
      <button onClick={() => { setIsRunning(false); setSeconds(0); }}>Parar</button>
    </div>
  );
};

