// Heros.tsx
import { SelectHero } from "@/components/UI/SelectHero";
import { code, rebel, guard } from "./constants";
import "./style.css";

export const Heros = () => {
  const groups = [
    { values: code, textButton: "Learn More About The Code" },
    { values: rebel, textButton: "Learn More About The Rebels" },
    { values: guard, textButton: "Learn More About The Guard" },
  ];

  return (
    <section className="heros_wrapper" aria-labelledby="heroes-title">
      <h2 id="heroes-title">HEROS</h2>
      <p>
        Discover the <span>mythical heroes</span> whose stories will shape the
        future of the universe.
      </p>

      <div className="heros_list">
        {groups.map((g, i) => (
          <SelectHero key={i} values={g.values} textButton={g.textButton} />
        ))}
      </div>
    </section>
  );
};
