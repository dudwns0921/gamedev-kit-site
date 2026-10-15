"use client";

import type { Lang } from "./content";

// EN · 한국어. The pick is kept in a cookie, so the first-visit guess from the browser's language (proxy.ts) never overrides it.
export default function LangSwitch({ lang }: { lang: Lang }) {
  const pick = (to: Lang) => {
    document.cookie = `lang=${to}; path=/; max-age=31536000; samesite=lax`;
  };
  return (
    <div className="lang" role="group" aria-label="Language">
      <a href="/" hrefLang="en" aria-current={lang === "en" ? "true" : undefined} onClick={() => pick("en")}>EN</a>
      <a href="/ko" hrefLang="ko" aria-current={lang === "ko" ? "true" : undefined} onClick={() => pick("ko")}>한국어</a>
    </div>
  );
}
