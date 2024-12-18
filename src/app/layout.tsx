import Header from "../components/Header";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const antonio = localFont({
  src: [
    {
      path: "../../public/fonts/antonio/antonio-v19-latin-100.woff2",
      weight: "100",
    },
    {
      path: "../../public/fonts/antonio/antonio-v19-latin-200.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/antonio/antonio-v19-latin-300.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/antonio/antonio-v19-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/antonio/antonio-v19-latin-500.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/antonio/antonio-v19-latin-600.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/antonio/antonio-v19-latin-700.woff2",
      weight: "700",
    },
  ],
  variable: "--font-antonio",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/inter-v18-latin-100.woff2",
      weight: "100",
    },
    {
      path: "../../public/fonts/inter/inter-v18-latin-200.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/inter/inter-v18-latin-300.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/inter/inter-v18-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/inter/inter-v18-latin-500.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/inter/inter-v18-latin-600.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/inter/inter-v18-latin-700.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/inter/inter-v18-latin-800.woff2",
      weight: "800",
    },
    {
      path: "../../public/fonts/inter/inter-v18-latin-900.woff2",
      weight: "900",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Patrick Gauvin Galerie",
  description:
    "Découvrez l'univers artistique de Patrick Gauvin, un peintre contemporain passionné par les techniques abstraites et l'expression libre. Inspiré par des maîtres comme Jackson Pollock, il crée des œuvres captivantes mêlant couleurs vibrantes et textures dynamiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <meta
          name="description"
          content="Découvrez l'univers artistique de Patrick Gauvin, un peintre contemporain passionné par les techniques abstraites et l'expression libre. Inspiré par des maîtres comme Jackson Pollock, il crée des œuvres captivantes mêlant couleurs vibrantes et textures dynamiques."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Patrick Gauvin, peinture, art contemporain, expressionnisme abstrait, Jackson Pollock, œuvres d'art, galerie d'art" />
        <title>Patrick Gauvin Galerie</title>
      </head>
      <body className={`${antonio.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
