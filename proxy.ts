import { NextResponse, type NextRequest } from "next/server";

// A first visit to / from a browser that prefers Korean goes to /ko. A language picked on the page (the `lang` cookie) always wins.
export function proxy(req: NextRequest) {
  const picked = req.cookies.get("lang")?.value;
  if (picked === "en") return NextResponse.next();
  const prefers = (req.headers.get("accept-language") ?? "").split(",")[0].trim().toLowerCase();
  if (picked === "ko" || prefers.startsWith("ko")) return NextResponse.redirect(new URL("/ko", req.url));
  return NextResponse.next();
}

export const config = { matcher: "/" };
