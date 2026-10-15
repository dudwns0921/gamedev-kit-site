import { metaFor } from "../meta";
import "../globals.css";

export { viewport } from "../meta";
export const metadata = metaFor("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
