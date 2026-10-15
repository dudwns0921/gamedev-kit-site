"use client";

import { useState } from "react";

// A command block with a copy button — the install lines are meant to be pasted.
export default function CopyBlock({ text, label, words }: { text: string; label?: string; words: { copy: string; copied: string } }) {
  const [done, setDone] = useState(false);
  return (
    <div className="code">
      {label ? <span className="code-label">{label}</span> : null}
      <pre><code>{text}</code></pre>
      <button
        className="copy"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setDone(true);
            setTimeout(() => setDone(false), 1600);
          } catch { /* the text stays selectable */ }
        }}
      >
        {done ? words.copied : words.copy}
      </button>
    </div>
  );
}
