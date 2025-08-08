import { Link } from "react-router-dom";
import "./style.css";

export const SelectHero = ({ values = [], textButton }) => {
  return (
    <div className="selectHero_wrapper">
      <div className="heros">
        {values.map((hero) => (
          <Link
            to={`/detail/${hero.id}`}
            className="hero-link"
            state={{ name: hero.name, type: hero.type, img: hero.img, text: hero.text, color: hero.color, contents: hero.contents }}
            key={hero.id}
          >
            <div
              style={{
                backgroundImage: `url(${hero.img})`,
              }}
              className="hero"
            >
              {/* text */}
            </div>
          </Link>
        ))}
      </div>
      <button>{textButton}</button>
    </div>
  );
};
