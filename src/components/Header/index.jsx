// Header.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/icons/logo.svg";
import { SocialLinks } from "../UI/SocialLinks";
import { socialLinks } from "@/entities/socialLinks";
import "./style.css";

export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header__bar">
        <button
          className="header__logo"
          onClick={() => {
            close();
            navigate("/");
          }}
          aria-label="Go to homepage"
        >
          <img src={Logo} alt="" aria-hidden="true" />
          <h1 className="header__brand">GameGPT</h1>
        </button>

        <button
          className="header__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="qwerty">
          <nav
            id="primary-nav"
            className={`header__nav ${open ? "is-open" : ""}`}
          >
            <div className="nav__inner">
              <ul className="nav__list" role="list">
                <li>
                  <Link to="/origin" onClick={close} className="nav__link">
                    DUEL Token
                  </Link>
                </li>
                <li>
                  <Link to="/team" onClick={close} className="nav__link">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/docs" onClick={close} className="nav__link">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tokenomics"
                    onClick={close}
                    className="nav__link"
                  >
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link to="/bridge" onClick={close} className="nav__link">
                    Bridge
                  </Link>
                </li>
              </ul>

              <ul className="nav__social" role="list">
                <SocialLinks links={socialLinks} />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
