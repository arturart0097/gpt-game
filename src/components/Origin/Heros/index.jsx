import yasuImg from "@/assets/images/yasu.png";
import Midori from "@/assets/images/midori.png";
import jett from "@/assets/images/jett.png";
import ss from "@/assets/images/ss.png";
import lewis from "@/assets/images/lewis.png";
import tensor from "@/assets/images/tensor.png";
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
    img: Midori, // Placeholder image
    type: "code",
    name: "Midori",
    text: `Midori Yamanaka grew up within the high-tech sanctuaries of the Guard faction, surrounded by the advanced scientific research of her parents. Despite the serious environment, her cheerful and inquisitive nature made her a beloved figure among her peers. While the Guard focused on curing the virus that had ravaged Earth, Midori took a different path, believing that enhancing the resilience of Earth's wildlife was key to restoring the planet's ecosystems.
<br />
<br />
Specializing in genetic alterations to animals, Midori works tirelessly to make them more adaptable to the harsh, mutated environment. Her approach involved combining the genetic traits of various species to create hybrids capable of thriving in the new world. Her breakthrough came when she successfully transformed a sickly bird into a vibrant, genetically superior species, symbolizing her vision for the future.
<br />
<br />
Despite skepticism from her colleagues, who viewed her work as risky, Midori continued her research with determination. Confident that her unique perspective could make a difference, she navigated the challenges of scientific discovery and skepticism. Midori's journey is one of innovation and resilience, showcasing the power of creativity and optimism in healing the planet.`, // Placeholder text
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
    name: "Jett",
    text: `Jett Howl was born into the Craftsmen Clan, known for their ingenuity and resourcefulness. His grandfather, Lewis Howl, the chief of the clan, was a legendary mechanic, and his father, Ryder Howl, was a renowned adventurer and inventor. From a young age, Jett showed a knack for tinkering, creating gadgets and machines from scrap materials. His free spirit and desire to explore often got him into trouble, but his inherent luck always seemed to pull him through.<br />
When Jett was a child, his father went missing on an expedition, it left a void in the clan and in Jett's heart. Determined to find his father and uncover the mysteries of the universe, Jett began building his own spaceship, The Howler, and a Jet Board for quick getaways. Alongside his loyal robot companion, Crank, Jett set out on a journey filled with danger and discovery.<br />
Despite the odds, Jett's inventions, though seemingly thrown together, always seem to work just when he needs them the most. His journey is one of adventure, luck, and the unwavering belief that he'll one day reunite with his father and uncover the secrets that lie beyond the stars.
 `,
    color: "#D05D3C",
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
  {
    id: 5,
    img: lewis,
    type: "code",
    name: "Lewis",
    text: `Lewis Howl, the esteemed chief of the Craftsman Clan within the Rebels faction, has lived a life marked by resilience and ingenuity. In his youth, Lewis was a formidable member of the Hunters Clan, renowned for his bravery in battles against the mutated beasts that plagued the desolate Earth. His reputation was built on countless skirmishes, where he displayed unparalleled skill and tenacity. However, a fierce battle left him with a permanent injury, forcing him to retire from the front lines.
<br />
<br />
Transitioning to the Craftsman Clan, Lewis dedicated his life to building and repairing the vital machinery and structures that the Rebels depended on. His experience as a hunter imbued him with a unique perspective, making him an innovative and resourceful craftsman. Over the years, his leadership and expertise earned him the respect of his peers and the title of chief. Despite his gruff exterior, Lewis is deeply protective of his grandson, Jett, especially after his son Ryder went missing on an expedition.
<br />
<br />
Haunted by his near-death experience and the loss of his son, Lewis is determined to shield Jett from the dangers of their world. He mentors Jett in the ways of the craftsman, passing on his knowledge and skills while keeping a watchful eye on the young scavenger's adventures. Lewis’s story is one of courage, adaptation, and the enduring bond of family, driving him to ensure that Jett has the tools and wisdom to survive in their perilous world.`,
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
    text: `In the elite ranks of the Guard faction, there exists a formidable force known as the Solar Sentinels. These bioengineered warriors are not born but meticulously created through advanced genetic engineering, combining the genetic superiority of various animals with cutting-edge technology. Each Knight possesses catlike reflexes, incredible strength, supersonic speed, enhanced vision, and unparalleled agility, making them the perfect tools for defense, asset retrieval, artifact recovery, personnel extraction, and emergency response.
<br />
<br />
The creation of a Sentinel requires a significant investment of resources and expertise. Due to the immense cost and effort involved, these Knights are kept in cryosleep, ready to be awakened only when their unparalleled capabilities are needed. Each is encased in highly advanced, impenetrable armor that grants them the ability to maneuver effortlessly in space and within Earth's atmosphere.
<br />
<br />
The Sentinels are engineered for peak performance, devoid of typical human traits and emotions. They are tools, designed and programmed for specific missions, ensuring the safety and supremacy of the Guard. This fleet stands as a testament to the Guard's commitment to maintaining order and protecting their interests with unmatched precision and efficiency. These bioengineered warriors, with their blend of animalistic prowess and advanced technology, represent the pinnacle of the Guard's scientific and military advancements.
 `,
    color: "#5656FB",
    contents: [
      {
        title: "1. Summary",
      },
    ],
  },
  {
    id: 8,
    img: tensor,
    type: "code",
    name: "Tensor",
    text: `Growing up within the cyberpunk cityscape of Mars, his unique adaptation to the nanobots quickly set him apart from his peers. Unlike others, his nanobots allowed him to transform his body parts into various weapons and tools, a capability that fascinated the scientists of the Code. Recognizing his potential, they kept him close, using him as a valuable test subject to further their understanding of nanotechnology.
<br />
<br />
Dubbed "Experiment Zero-One" during his early years, he spent countless hours in laboratories, subjected to various tests and experiments. The scientists were keen to unlock the secrets of his unique biology, hoping to replicate his abilities in others. Despite the rigorous and often invasive testing, he maintained a curious and resilient spirit, always eager to learn more about his capabilities.
<br />
<br />
But as he grew older, he began to yearn for more than just the sterile environment of the labs. He developed a love for music and often sneaked out to experience the vibrant nightlife of the city. The neon lights, the rhythm of the streets, and the freedom of the urban sprawl call to him. He dreams of adventures beyond the confines of the laboratory, of using his abilities for something greater than just being a guinea pig. He's determined to prove that he’s more – he’s a game-changer.`,
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
