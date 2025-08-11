import { SelectHero } from "@/components/UI/SelectHero";
import { code, rebel, guard } from "./constants";

import "./style.css";

export const Heros = () => {
  return (
    <div className="heros_wrapper">
      <h2>HEROS</h2>
      <p>
        Discover the <span>mythical heroes </span> whose stories will shape the
        future of the universe.
      </p>

      <SelectHero values={code} textButton="Learn More About The Code" />
      <SelectHero values={rebel} textButton="Learn More About The Rebels" />
      <SelectHero values={guard} textButton="Learn More About The Guard" />
    </div>
  );
};