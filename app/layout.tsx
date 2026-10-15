import type { Metadata, Viewport } from "next";
import "./globals.css";

const description = "A repeatable way to make a game with Claude Code — one that gets better with every game you make. For Godot, Unity and web games.";

export const metadata: Metadata = {
  title: "claude-gamedev-kit — make games with Claude Code, cycle by cycle",
  description,
  openGraph: { title: "claude-gamedev-kit", description, images: ["/hero.jpg"] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07110e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
