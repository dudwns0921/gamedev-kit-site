"use client";

import { useEffect, useRef, useState } from "react";

type Scene = { img: string; title: string; text: string; alt: string };

// The dashboard, one screen at a time: swipe, the arrows, or a dot.
export default function Scenes({ scenes, label, prev, next }: { scenes: Scene[]; label: string; prev: string; next: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  // Where the track is headed — an arrow pressed again mid-scroll moves on from there, not from where it was
  const aim = useRef(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const seen = () => setAt(Math.round(el.scrollLeft / el.clientWidth));
    const settled = () => { aim.current = Math.round(el.scrollLeft / el.clientWidth); };
    el.addEventListener("scroll", seen, { passive: true });
    el.addEventListener("scrollend", settled);
    return () => { el.removeEventListener("scroll", seen); el.removeEventListener("scrollend", settled); };
  }, []);

  function go(i: number) {
    const el = track.current;
    if (!el) return;
    const n = (i + scenes.length) % scenes.length;
    aim.current = n;
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="scenes" role="region" aria-roledescription="carousel" aria-label={label}
      onKeyDown={(e) => { if (e.key === "ArrowLeft") go(aim.current - 1); if (e.key === "ArrowRight") go(aim.current + 1); }}>
      <div className="scene-track" ref={track} tabIndex={0}>
        {scenes.map((s, i) => (
          <figure key={s.img} className="scene" aria-roledescription="slide" aria-label={`${i + 1} / ${scenes.length}`} aria-hidden={i !== at}>
            <img className="shot" src={s.img} alt={s.alt} loading={i ? "lazy" : undefined} draggable={false} />
          </figure>
        ))}
      </div>
      <div className="scene-bar">
        <button className="scene-arrow" onClick={() => go(aim.current - 1)} aria-label={prev}>←</button>
        <div className="scene-cap" aria-live="polite">
          <b><span className="scene-n">{String(at + 1).padStart(2, "0")}</span>{scenes[at].title}</b>
          <p>{scenes[at].text}</p>
        </div>
        <button className="scene-arrow" onClick={() => go(aim.current + 1)} aria-label={next}>→</button>
      </div>
      <div className="scene-dots" role="tablist">
        {scenes.map((s, i) => (
          <button key={s.img} role="tab" aria-selected={i === at} aria-label={s.title} className={i === at ? "on" : ""} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}
