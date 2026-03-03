import localFont from "next/font/local";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = localFont({
  variable: "--font-space",
  display: "swap",
  src: [
    { path: "./fonts/SpaceGrotesk-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/SpaceGrotesk-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const tomatoGrotesk = localFont({
  variable: "--font-tomato",
  display: "swap",
  src: [
    { path: "./fonts/TomatoGrotesk-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/TomatoGrotesk-Bold.otf", weight: "700", style: "normal" },
  ],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030712",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Ticto × Ebulição — Transforme seu negócio numa máquina de vendas",
  description: "Crie sua conta na Ticto, participe do evento Ebulição por Rafa Prado e concorra a um iPhone 16 Pro. A maior plataforma de vendas do Brasil.",
  openGraph: {
    title: "Ticto × Ebulição — Concorra a um iPhone 16 Pro",
    description: "Crie sua conta na Ticto e concorra a um iPhone 16 Pro no evento Ebulição.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Ticto × Ebulição" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticto × Ebulição — Concorra a um iPhone 16 Pro",
    description: "Crie sua conta na Ticto e concorra a um iPhone 16 Pro no evento Ebulição.",
    images: ["/og-image.svg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${tomatoGrotesk.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md"
        >
          Pular para o conteúdo principal
        </a>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
