import Animoka from "@/assets/icons/animoka.svg";
import Placeholder from "@/assets/icons/placeholder.svg";
import CoinFund from "@/assets/icons/coinFund.svg";
import Dao from "@/assets/icons/dao.svg";

import "./style.css";

export const TrustedBy = () => {
  return (
    <div className="trustedBy_wrapper">
      <h2>Trusted by Industry OGs</h2>
      <div className="icons_wrapper">
        <img src={Animoka} alt="animoka" />
        <img src={Placeholder} alt="placeholder" />
        <img src={CoinFund} alt="coinfund" />
        <img src={Dao} alt="dao market" />
      </div>
    </div>
  );
};
