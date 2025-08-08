import yasuImg from "@/assets/images/yasu.png";
import jett from "@/assets/images/jett.png";
import ss from "@/assets/images/ss.png";
import defaultHeroImg from "@/assets/images/defaultHero.png";

import { SelectHero } from "@/components/UI/SelectHero";

import "./style.css";

const code = [
  {
    id: 1,
    img: yasuImg, // Image for Yasu
    type: "code",
    name: "Yasu",
    text: `
      Yasu was born in the neon-lit underworld of Mars' cyberpunk city, a place of relentless hustle and technological marvels. 
      Designated as a bounty hunter by the Code based on his aptitude, he quickly became known for his efficiency and skill. 
      During a mission on the desolate ruins of Earth, Yasu discovered a rusted katana amidst the rubble. Intrigued by the ancient weapon, 
      he took it back with him to Mars.
      <br /><br />
      Back home, Yasu delved into researching the katana and uncovered the rich history and code of the samurai. Fascinated by their discipline 
      and philosophy, he began to teach himself the ways of the samurai, integrating these ancient teachings into his modern life. 
      The katana became a symbol of his dedication and honor.
      <br /><br />
      Recognizing his potential, Null, the leader of the Code, offered Yasu augmentation with nanoswarm technology. 
      Embracing the transformation, Yasu gained the ability to rematerialize over short distances and materialize weapons from the swarm. 
      These enhancements made him an even more formidable bounty hunter, combining the ancient ways of the samurai with the advanced technology of the Code.
      <br /><br />
      Yasu's journey as a bounty hunter is marked by his unwavering commitment to the Code. He navigates the complexities of his role 
      with a strong sense of honor and justice.`,
    color: "#FB565C",
    contents: [
      {
        title: "1. Summary",
        // Additional content for this section can go here
      },
    ],
  },
  {
    id: 2,
    img: defaultHeroImg, // Placeholder image
    type: "code",
    name: "[REDACTED]",
    text: "", // Placeholder text
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
  {
    id: 3,
    img: defaultHeroImg, // Placeholder image
    type: "code",
    name: "[REDACTED]",
    text: "", // Placeholder text
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
];

const rebel = [
  {
    id: 4,
    img: jett,
    type: "code",
    name: "Yasu",
    text: "Swift and agile fighter.",
    color: "#D05D3C",
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
  { 
    id: 5, 
    img: defaultHeroImg, 
    type: "code", 
    name: "[REDACTED]", 
    text: "",
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
  { 
    id: 6, 
    img: defaultHeroImg, 
    type: "code", 
    name: "[REDACTED]", 
    text: "",
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
];

const guard = [
  {
    id: 7,
    img: ss,
    type: "code",
    name: "Yasu",
    text: "Guardian of the realm.",
    color: "#5656FB",
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
  { 
    id: 8, 
    img: defaultHeroImg, 
    type: "code", 
    name: "[REDACTED]", 
    text: "",
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
  { 
    id: 9, 
    img: defaultHeroImg, 
    type: "code", 
    name: "[REDACTED]", 
    text: "",
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
];

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
