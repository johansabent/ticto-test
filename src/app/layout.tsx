import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-tomato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
