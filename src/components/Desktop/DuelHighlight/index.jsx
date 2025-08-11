// DuelHighlight.tsx
import Duel1 from "@/assets/icons/duel1.svg";
import Duel2 from "@/assets/icons/duel2.svg";
import Duel3 from "@/assets/icons/duel3.svg";
import Duel4 from "@/assets/icons/duel4.svg";
import DuelBet from "@/assets/images/duel-bet.png";
import DuelWin from "@/assets/images/duel-win.png";
import "./style.css";

export const DuelHighlight = () => {
  return (
    <div className="duel-wrapper">
      <div className="duel-title">
        <img src={Duel1} alt="sparkle left" className="duel-icon1" loading="lazy" />
        <img src={Duel2} alt="sparkle right" className="duel-icon2" loading="lazy" />
        <img src={Duel3} alt="sparkle mid" className="duel-icon3" loading="lazy" />
        <div className="position-icon">
          <img src={Duel4} alt="sparkle bottom-right" className="duel-icon4" loading="lazy" />
        </div>

        <div className="duel-text">
          <h2>
            10,000 games <br /> powered by $DUEL
          </h2>
          <span>
            Wager on billion-dollar games or the latest Pepe AI <br />
            Game by staking Duel. The winner pays 10% <br />
            cashback in $DUEL DAO
          </span>
        </div>
      </div>

      <div className="duel-bet-win">
        <img src={DuelBet} alt="Place a duel bet interface" loading="lazy" decoding="async" />
        <img src={DuelWin} alt="Duel win screen" loading="lazy" decoding="async" />
      </div>

      <div className="button-wrapper">
        <button>Learn more</button>
      </div>
    </div>
  );
};
