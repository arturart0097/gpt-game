import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Game1 from "@/assets/images/game1.png";
import "./style.css";

const gameImages = [Game1, Game1];
const suggestions = [
  "RPG Game: a forest scene...",
  "FPS: neon rooftops at night...",
  "Platformer: lava cave with traps...",
  "Racing: desert circuit at dusk...",
  "Survival: snowy outpost, blizzard...",
];

const randIndex = (len) =>
  (typeof crypto !== "undefined"
    ? crypto.getRandomValues(new Uint32Array(1))[0]
    : Math.floor(Math.random() * 2 ** 32)) % len;

export const CreateGame = () => {
  // Генеруємо випадковий дефолт для КОЖНОГО слайду один раз (на mount)
  const defaults = useMemo(
    () => gameImages.map(() => suggestions[randIndex(suggestions.length)]),
    []
  );

  return (
    <div className="createGame_wrapper">
      <h2>Create your game in 3... 2... 1!</h2>

      <Swiper slidesPerView="auto" className="swiper-custom" spaceBetween={30}>
        {gameImages.map((img, idx) => (
          <SwiperSlide key={idx} className="carouselSlide">
            <div className="carouselItem">
              <img src={img} alt={`game ${idx + 1}`} className="gameImage" />
              <div className="generate-menu">
                <div className="avatar">
                  <div className="logo" />
                  <span>/create</span>
                </div>

                {/* некерований інпут: defaultValue читається при монтуванні */}
                <input type="text" defaultValue={defaults[idx]} />

                <button>Generate</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
