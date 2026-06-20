import { EdenHeader } from "@components/common/EdenHeader";
import { Footer } from "@components/common/Footer";
import { QueryProvider } from "@providers/query-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DEFAULT_OG_IMAGE = "https://whitelabel-app-on-eden.vercel.app/og-default.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eden.co.uk"),
  title: {
    default: "Publish360 — White Label Digital Publishing | Eden",
    template: "%s | Publish360",
  },
  description:
    "Publish360 is Eden's white-label digital publishing platform for independent publishers, content creators and charities. Sell eBooks, audiobooks, video and courses — under your own brand.",
  openGraph: {
    siteName: "Publish360 by Eden",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Publish360 — White Label Digital Publishing by Eden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@edencouk",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "https://www.eden.co.uk/favicon.ico",
    shortcut: "https://www.eden.co.uk/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3d2b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <QueryProvider>
          <EdenHeader />
          <div className="flex-1">{children}</div>
          <Footer />
        </QueryProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
