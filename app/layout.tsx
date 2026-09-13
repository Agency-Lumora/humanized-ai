import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GoogleAnalytics } from "@next/third-parties/google";
import ClarityInit from "@/components/ClarityInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Used only by the Hero section's editorial redesign, scoped via the
// --font-cormorant / --font-dm-sans CSS variables rather than replacing the
// site-wide --font-sans / .font-serif tokens used elsewhere on the site.
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agencylumora.com"),

  title: {
    default:
      "Lumora | Website Design, Development & Branding Agency",
    template: "%s | Lumora",
  },

  description:
    "Website design and development, branding, UI/UX, SEO, CRM, and AI integrations. We build with you, then teach you how to own it. 1 month free support included.",

  keywords: [
    "web design agency",
    "web development agency",
    "branding agency",
    "UI/UX design",
    "logo design",
    "brand consultation",
    "website design",
    "website development",
    "AI website development",
    "SEO services",
    "CRM integration",
    "business automation",
    "digital growth agency",
    "web design India",
    "custom web development",
  ],

  authors: [{ name: "Namrata Chawla, Drishti Batra" }],

  creator: "Namrata Chawla, Drishti Batra",

  publisher: "Lumora Digital Agency",

  applicationName: "Lumora Digital Agency",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agencylumora.com",
    siteName: "Lumora",
    title: "Lumora | Website Design, Development & Branding",
    description:
      "Website design and development, branding, UI/UX, SEO, CRM, and AI integrations. We build with you, then teach you how to own it.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lumora",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumora | Website Design & Development",
    description:
      "We build websites you can actually own. Design, development, branding, and 1 month free support.",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ClarityInit/>
        <CustomCursor />
        {children}
        <Toaster richColors position="top-right" />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Lumora DIgital Agency",
              url: "https://agencylumora.com",
              logo: "https://agencylumora.com/logo.png",
              image: "https://agencylumora.com/og-image.jpg",
              description:
                "Lumora designs and develops websites, creates brand identities, and provides SEO, CRM, and AI integrations. We build with you, then teach you how to manage it yourself with 1 month of free support.",
              email: "hello@agencylumora.com",
              telephone: "+91-7383172979",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: "Worldwide",
              priceRange: "₹₹",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
