"use client";

import { useEffect, useRef, useState } from "react";

type Scene = { img: string; title: string; text: string; alt: string };

// The dashboard, screen by screen, in a strip you swipe — the next screen always peeks in, so there is nothing to press.
// A mouse drags it like a finger; a trackpad scrolls it sideways.
export default function Scenes({ scenes, label }: { scenes: Scene[]; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const seen = () => {
      const kids = [...el.children] as HTMLElement[];
      const left = el.scrollLeft + parseFloat(getComputedStyle(el).scrollPaddingLeft || "0");
      let best = 0;
      kids.forEach((k, i) => { if (Math.abs(k.offsetLeft - left) < Math.abs(kids[best].offsetLeft - left)) best = i; });
      setAt(best);
    };
    el.addEventListener("scroll", seen, { passive: true });
    return () => el.removeEventListener("scroll", seen);
  }, []);

  // Dragging with a mouse: snapping is off while the hand moves, back on when it lets go so the strip settles on a screen
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let x0 = 0, s0 = 0, down = false, moved = false;
    const start = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true; moved = false; x0 = e.clientX; s0 = el.scrollLeft;
      el.classList.add("dragging");
    };
    const move = (e: PointerEvent) => {
      if (!down) return;
      if (Math.abs(e.clientX - x0) > 4) moved = true;
      el.scrollLeft = s0 - (e.clientX - x0);
    };
    const end = () => {
      if (!down) return;
      down = false;
      el.classList.remove("dragging");
    };
    const click = (e: MouseEvent) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } };
    el.addEventListener("pointerdown", start);
    addEventListener("pointermove", move);
    addEventListener("pointerup", end);
    el.addEventListener("click", click, true);
    return () => {
      el.removeEventListener("pointerdown", start);
      removeEventListener("pointermove", move);
      removeEventListener("pointerup", end);
      el.removeEventListener("click", click, true);
    };
  }, []);

  function go(i: number) {
    const el = track.current;
    const k = el?.children[i] as HTMLElement | undefined;
    if (!el || !k) return;
    el.scrollTo({ left: k.offsetLeft - parseFloat(getComputedStyle(el).scrollPaddingLeft || "0"), behavior: "smooth" });
  }

  return (
    <div className="scenes" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="scene-track" ref={track} tabIndex={0}
        onKeyDown={(e) => { if (e.key === "ArrowLeft") { e.preventDefault(); go(Math.max(0, at - 1)); } if (e.key === "ArrowRight") { e.preventDefault(); go(Math.min(scenes.length - 1, at + 1)); } }}>
        {scenes.map((s, i) => (
          <figure key={s.img} className={`scene${i === at ? " on" : ""}`} aria-roledescription="slide" aria-label={`${i + 1} / ${scenes.length}`}>
            <figcaption>
              <span className="scene-n">{String(i + 1).padStart(2, "0")}</span>
              <b>{s.title}</b>
              <span className="scene-text">{s.text}</span>
            </figcaption>
            <img className="shot" src={s.img} alt={s.alt} loading={i > 1 ? "lazy" : undefined} draggable={false} />
          </figure>
        ))}
      </div>
      <div className="scene-dots" aria-hidden>
        {scenes.map((s, i) => <span key={s.img} className={i === at ? "on" : ""} />)}
      </div>
    </div>
  );
}
