import Logo from "@/assets/icons/logo.svg";
import Bsc from "@/assets/icons/bsc.svg";
import Eth from "@/assets/icons/eth.svg";

import { SocialLinks } from "../UI/SocialLinks";
import { socialLinks } from "@/entities/socialLinks";
import { useLocation } from "react-router-dom";

import "./style.css";

export const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className={isHome ? "" : "footer--green"}>
      <div className="social_logo">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
          <h1>GameGPT</h1>
        </div>
        <SocialLinks links={socialLinks} />
        <span>Developed by Prism</span>
      </div>
      <div className="crypto">
        <div>
          <img src={Bsc} alt="bsc" />
          <span>BSC Contract Address</span>
        </div>
        <div>
          <img src={Eth} alt="eth" />
          <span>ETH Contract Address</span>
        </div>
      </div>
      <div className="footer-menu">
        <ul>
          <li>DUEL Token</li>
          <li>Team</li>
          <li>Docs</li>
          <li>Tokenomics</li>
        </ul>
      </div>
    </footer>
  );
};
