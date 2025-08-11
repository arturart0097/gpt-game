import "./style.css";

import lol from "@/assets/icons/lol.svg";
import val from "@/assets/icons/val.svg";
import chess from "@/assets/icons/chess.svg";
import dess from "@/assets/icons/dest.svg";
import pubg from "@/assets/icons/pubg.svg";
import dota from "@/assets/icons/dota.svg";

export const GameIntegration = () => {
  return (
    <section className="integration" aria-labelledby="integration-title">
      <div className="integration__inner">
        <p className="integration__kicker">Approved Game Integrations with over</p>
        <h2 id="integration-title" className="integration__title">
          150,000,000 Active Users
        </h2>

        <div className="integration__logos" role="list">
          <img className="integration__logo" src={lol} alt="League of Legends" loading="lazy" decoding="async" role="listitem" />
          <img className="integration__logo" src={val} alt="Valorant" loading="lazy" decoding="async" role="listitem" />
          <img className="integration__logo" src={chess} alt="Chess.com" loading="lazy" decoding="async" role="listitem" />
          <img className="integration__logo" src={dess} alt="Destiny" loading="lazy" decoding="async" role="listitem" />
          <img className="integration__logo" src={pubg} alt="PUBG" loading="lazy" decoding="async" role="listitem" />
          <img className="integration__logo" src={dota} alt="Dota 2" loading="lazy" decoding="async" role="listitem" />
        </div>
      </div>
    </section>
  );
};
