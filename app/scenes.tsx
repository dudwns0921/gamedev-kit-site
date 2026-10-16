"use client";

import { A11y, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type Scene = { img: string; title: string; text: string; alt: string };

// The dashboard, screen by screen: the screen in view sits in the middle, its neighbours peek in at both sides.
// Swipe, drag, or scroll sideways on a trackpad; it loops, so there is always a screen on either side.
export default function Scenes({ scenes, label }: { scenes: Scene[]; label: string }) {
  return (
    <div className="scenes" role="region" aria-label={label}>
      <Swiper
        modules={[A11y, Keyboard, Mousewheel, Pagination]}
        centeredSlides
        slidesPerView="auto"
        spaceBetween={12}
        breakpoints={{ 640: { spaceBetween: 24 } }}
        loop
        grabCursor
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        pagination={{ clickable: true }}
        speed={500}
      >
        {scenes.map((s, i) => (
          <SwiperSlide key={s.img} className="scene">
            <figure>
              <figcaption>
                <span className="scene-n">{String(i + 1).padStart(2, "0")}</span>
                <b>{s.title}</b>
                <span className="scene-text">{s.text}</span>
              </figcaption>
              <img className="shot" src={s.img} alt={s.alt} draggable={false} />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
