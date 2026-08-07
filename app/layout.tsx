import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GoogleAnalytics } from "@next/third-parties/google";
import ClarityInit from "@/components/ClarityInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agencylumora.com"),

  title: {
    default:
      "Lumora Digital Agency | Humanized AI Websites for Modern Businesses",
    template: "%s | Lumora Agency",
  },

  description:
    "Lumora designs premium websites for startups, agencies, personal brands, and businesses. Fast, modern, SEO-friendly websites that convert visitors into customers.",

  keywords: [
    "Lumora DIgital Agency",
    "Digital Agency",
    "Digital Marketing Agency",
    "Marketing Agency",
    "Website Design",
    "Website Development",
    "AI Websites",
    "Landing Pages",
    "SEO Agency",
    "Branding",
    "Business Automation",
    "UI UX Design",
    "Web Design India",
    "Premium Websites",
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
    siteName: "Lumora Digital Agency",
    title: "Lumora Digital Agency | Humanized AI Websites",
    description:
      "Premium websites, branding, SEO, and AI-powered digital solutions for modern businesses.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lumora Digital Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumora Digital Agency",
    description:
      "Premium websites, branding, SEO, and AI-powered digital solutions.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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
                "Lumora Digital Agency builds premium Humanized AI-powered websites, branding, SEO, and digital solutions for ambitious businesses.",
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
