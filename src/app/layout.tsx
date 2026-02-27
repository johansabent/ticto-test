import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata = {
  title: "Ticto × Ebulição - Transforme seu negócio numa máquina de vendas",
  description: "A ebulição instantânea para produtos digitais e físicos começa com a maior e mais poderosa plataforma do Brasil",
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
      </body>
    </html>
  );
}
