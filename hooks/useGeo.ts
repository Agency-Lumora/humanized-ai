"use client";

import { useEffect, useState } from "react";

export type Currency = "INR" | "USD";

export interface GeoResult {
  /** ISO 3166-1 alpha-2 country code detected from the visitor's IP ("" if unknown). */
  country: string;
  /** Display currency: INR only for India, USD for the rest of the world. */
  currency: Currency;
  /** True once detection has resolved (geo fetch or device fallback). */
  resolved: boolean;
}

/**
 * Device-based fallback used when server geolocation is unavailable
 * (e.g. local development, or a non-Vercel host). Reads the device timezone
 * and browser locale, which a VPN cannot change.
 */
function detectCurrencyFromDevice(): Currency {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const locale = typeof navigator !== "undefined" ? navigator.language : "";
    const isIndia =
      /Asia\/(Kolkata|Calcutta)/i.test(tz) || /-IN$/i.test(locale);
    return isIndia ? "INR" : "USD";
  } catch {
    return "USD";
  }
}

/**
 * Resolves the visitor's country and display currency.
 *
 * Primary source is Vercel geolocation via `/api/geo`. India (IN) is shown INR;
 * every other country is shown USD. If geolocation is unavailable, falls back to
 * device timezone/locale detection. Defaults to USD so global visitors never see
 * INR before detection completes.
 */
export function useGeo(): GeoResult {
  const [country, setCountry] = useState<string>("");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [resolved, setResolved] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/geo");
        if (res.ok) {
          const data = (await res.json()) as { country?: string };
          const code = (data.country ?? "").toUpperCase();
          if (!cancelled && code) {
            setCountry(code);
            setCurrency(code === "IN" ? "INR" : "USD");
            setResolved(true);
            return;
          }
        }
      } catch {
        // fall through to device detection
      }

      if (!cancelled) {
        setCurrency(detectCurrencyFromDevice());
        setResolved(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { country, currency, resolved };
}
