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
        <img src={Duel1} alt="icon" className="duel-icon1" />
        <img src={Duel2} alt="icon" className="duel-icon2" />
        <img src={Duel3} alt="icon" className="duel-icon3" />
        <div className="position-icon">
          <img src={Duel4} alt="icon" className="duel-icon4" />
        </div>
        <div className="duel-text">
          <h2>
            10,000 games <br /> powered by $DUEL
          </h2>
          <span>
            Wager on billion-dollar games or the latest Pepe AI <br /> Game by
            staking Duel. The winner pays 10% <br /> cashback in $DUEL DAO
          </span>
        </div>
      </div>
      <div className="duel-bet-win">
        <img src={DuelBet} alt="bet" />
        <img src={DuelWin} alt="win" />
      </div>
      <div className="button-wrapper">
        <button>Learn more</button>
      </div>
    </div>
  );
};
