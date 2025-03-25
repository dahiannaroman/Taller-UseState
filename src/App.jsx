import { DarkModeToggle } from "./components/DarkModeToggle";
import { ColorGenerator } from "./components/ColorGenerator";
import { LikeDislike } from "./components/LikeDisLike";
import { Timer } from "./components/Timer";

export const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <DarkModeToggle />
      <LikeDislike />
      <ColorGenerator />
      <Timer />
    </div>
  );
};
