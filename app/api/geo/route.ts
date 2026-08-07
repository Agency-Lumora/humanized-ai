import { NextResponse } from "next/server";

// Geolocation is derived from the request IP by Vercel's edge network and
// exposed via the `x-vercel-ip-country` header (ISO 3166-1 alpha-2, e.g. "IN").
// This must never be cached, since it varies per visitor.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("x-country") ??
    "";

  return NextResponse.json({ country: country.toUpperCase() });
}
