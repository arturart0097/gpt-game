import GoogleLogo from "@/assets/icons/google.svg";
import MitLogo from "@/assets/icons/mit.svg";
import RegisterUserYears from "@/assets/images/registerUserYears.png";

import "./style.css";

export const GamefiSlogan = () => {
  return (
    <div className="gamefiSlogan_wrapper">
      <div className="gamefiSlogan_experts_text">
        <div className="experts">
          <span>Experts from</span>
          <img src={GoogleLogo} alt="google" />
          <img src={MitLogo} alt="mit" />
        </div>
        <div className="gamefiSlogan_wrapper-text">
          <h2>
            Game AI Engine that <br /> will change Gamefi <br /> as we know it
          </h2>
          <p>
            Our seasoned team with experience at Google and MIT and 2 exits has
            been <br /> working for 3 years to create a new Game AI Engine
          </p>
        </div>
      </div>
      <div className="gameslogantest">
        <div className="gamefiSlogan_content">
          <div className="activePlayer activePlayer-text">
            <h2>5,000</h2>
            <span>active players</span>
          </div>
          <div className="registeredUsers">
            <img
              src={RegisterUserYears}
              alt="years"
              className="registeredUsers-years"
            />
            <div className="registeredUsers-text">
              <h2>75,000</h2>
              <span>registered users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
