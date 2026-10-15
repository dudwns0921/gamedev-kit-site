import { metaFor } from "../meta";
import "../globals.css";

export { viewport } from "../meta";
export const metadata = metaFor("ko");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
