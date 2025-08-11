import "./style.css";

import { Link } from "react-router-dom";
import { factions } from "@/entities/factions";

export const Factions = () => {
  return (
    <div className="factions_wrapper">
      <div className="factions-text">
        <h2>
          <span>Will you seize</span> this power and forge a new <br /> era, or
          let it fall into the wrong hands?
        </h2>
      </div>

      <div className="faction-content">
        <h2>FACTIONS</h2>
        <p>
          Join the <span>Guard</span>, the <span>Code</span>, and the{" "}
          <span>Rebels</span> as they navigate a shattered Earth and compete for
          dominance and survival in a harsh new reality.
        </p>

        <div className="facts">
          {factions.map((fact) => (
            <Link to={`/fact/${fact.id}`} key={fact.id} className="fact-link">
              <img src={fact.img} alt={fact.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
