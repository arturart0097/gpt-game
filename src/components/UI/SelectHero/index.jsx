import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const SelectHero = ({ values = [], textButton, link }) => {
  const navigate = useNavigate();

  return (
    <div className="selectHero_wrapper">
      <div className="heros">
        {values.map((hero) => (
          <Link
            to={`/detail/${hero.id}`}
            className="hero-link"
            state={{
              name: hero.name,
              type: hero.type,
              img: hero.img,
              text: hero.text,
              color: hero.color,
              contents: hero.contents,
            }}
            key={hero.id}
          >
            <div
              style={{
                backgroundImage: `url(${hero.img})`,
              }}
              className="hero"
            >
              <span className="hero-type">{hero.type}</span>
              <p className="hero-name">{hero.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={() => navigate(link)}>{textButton}</button>
    </div>
  );
};
