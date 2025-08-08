import { Header } from "@/components/Header";
import "./style.css";

export const OriginBunner = () => {
  return (
    <div className="origin-wrapper">
      <Header />
      <div className="origin-text">
        <h1>Fragments of Humanity</h1>
        <p>A Broken World Awaits Your Leadership and Vision</p>
        <button>Discover the Factions</button>
      </div>
    </div>
  );
};
