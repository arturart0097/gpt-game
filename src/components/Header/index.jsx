import Logo from "@/assets/icons/logo.svg";
import New from "@/assets/icons/new.svg";
import { SocialLinks } from "../UI/SocialLinks";

import "./style.css";
import { socialLinks } from "@/entities/socialLinks";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navidate = useNavigate()

  return (
    <header>
      <div className="header-logo" onClick={() => navidate("/")}>
        <img src={Logo} alt="logo" />
        <h1>GameGPT</h1>
      </div>
      <div className="header-menu">
        <ul>
          <li>DUEL Token</li>
          <li>Team</li>
          <li>Tokenomics</li>
          <li>
            NFT
            <span>
              <img src={New} alt="new" />
            </span>
          </li>
        </ul>
        <ul>
          <SocialLinks links={socialLinks} />
        </ul>
      </div>
    </header>
  );
};
