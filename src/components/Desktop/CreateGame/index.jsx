"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Game1 from "@/assets/images/game1.png";

import "./style.css";

const gameImages = [Game1, Game1];

export const CreateGame = () => {
  return (
    <div className="createGame_wrapper">
      <h2>Create your game in 3... 2... 1!</h2>

      <Swiper
        slidesPerView={"auto"}
        className="swiper-custom"
        spaceBetween={30}
      >
        {gameImages.map((img, idx) => (
          <SwiperSlide key={idx} className="carouselSlide">
            <div className="carouselItem">
              <img src={img} alt={`game ${idx + 1}`} className="gameImage" />
              <div className="generate-menu">
                <div className="avatar">
                  <div className="logo" />
                  <span>/create</span>
                </div>
                <input
                  type="text"
                  defaultValue="RPG Game: a forest scene..."
                />
                <button>Generate</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
