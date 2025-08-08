import { Header } from "../../Header";
import "./style.css";

export const DesktopBunner = () => {
  return (
    <div className="bunner-wrapper">
      <Header />
      <div className="bunner-text">
        <h1>GameGPT: AI-Driven <br /> Game Builder</h1>
        <p>
          Powering the next 10,000 Blockchain <br /> Games with one token $DUEL
        </p>
      </div>
    </div>
  );
};
