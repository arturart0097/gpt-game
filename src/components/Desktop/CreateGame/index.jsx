import { useMemo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Game1 from "@/assets/images/game1.png";
import Game3 from "@/assets/images/game3.png";
import Game4 from "@/assets/images/game4.png";
import GameBg2 from "@/assets/images/gameBG2.png";
import "./style.css";

const gameImages = [Game1, Game3, GameBg2, Game4];
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

const useTypingAnimation = (slideIndex, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentText = suggestions[currentTextIndex];

  useEffect(() => {
    if (isTyping && currentIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentIndex >= currentText.length) {
      const pauseTimer = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % suggestions.length);
        setIsTyping(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }
  }, [currentIndex, currentText, speed, isTyping]);

  useEffect(() => {
    const randomStartIndex = randIndex(suggestions.length);
    setDisplayText("");
    setCurrentIndex(0);
    setCurrentTextIndex(randomStartIndex);
    setIsTyping(true);
  }, [slideIndex]);

  return displayText;
};

export const CreateGame = () => {
  const defaults = useMemo(
    () => gameImages.map(() => suggestions[randIndex(suggestions.length)]),
    []
  );

  return (
    <div className="createGame_wrapper">
      <h2>Create your game in 3... 2... 1!</h2>

      <Swiper slidesPerView="auto" className="swiper-custom" spaceBetween={30}>
        {gameImages.map((img, idx) => {
          const TypingInput = () => {
            const [isEditing, setIsEditing] = useState(false);
            const [userText, setUserText] = useState("");
            const typedText = useTypingAnimation(idx, 80);

            const handleInputClick = () => {
              setIsEditing(true);
              setUserText(typedText);
            };

            const handleInputChange = (e) => {
              setUserText(e.target.value);
            };

            const handleInputBlur = () => {
              setIsEditing(false);
            };

            return (
              <input
                type="text"
                value={isEditing ? userText : typedText}
                onChange={handleInputChange}
                onClick={handleInputClick}
                onBlur={handleInputBlur}
                className="typing-input"
                placeholder={isEditing ? "Введіть свій текст..." : ""}
              />
            );
          };

          return (
            <SwiperSlide key={idx} className="carouselSlide">
              <div className="carouselItem">
                <img src={img} alt={`game ${idx + 1}`} className="gameImage" />
                <div className="generate-menu">
                  <div className="avatar">
                    <div className="logo" />
                    <span>/create</span>
                  </div>

                  <TypingInput />

                  <button>Generate</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
