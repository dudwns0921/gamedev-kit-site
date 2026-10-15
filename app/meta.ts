import type { Metadata, Viewport } from "next";
import { COPY, type Lang } from "./content";

export const SITE = "https://gamedev-kit-site.vercel.app";

export function metaFor(lang: Lang): Metadata {
  const t = COPY[lang].meta;
  return {
    metadataBase: new URL(SITE),
    title: t.title,
    description: t.description,
    alternates: { canonical: lang === "en" ? "/" : "/ko", languages: { en: "/", ko: "/ko" } },
    openGraph: { title: "claude-gamedev-kit", description: t.description, images: ["/hero.jpg"], locale: lang === "en" ? "en_US" : "ko_KR" },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07110e" };
