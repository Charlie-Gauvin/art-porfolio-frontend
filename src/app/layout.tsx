import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const antonio = localFont({
  src: [
    {
      path: "./fonts/antonio/antonio-v19-latin-100.woff2",
      weight: "100",
    },
    {
      path: "./fonts/antonio/antonio-v19-latin-200.woff2",
      weight: "200",
    },
    {
      path: "./fonts/antonio/antonio-v19-latin-300.woff2",
      weight: "300",
    },
    {
      path: "./fonts/antonio/antonio-v19-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/antonio/antonio-v19-latin-500.woff2",
      weight: "500",
    },
    {
      path: "./fonts/antonio/antonio-v19-latin-600.woff2",
      weight: "600",
    },
    {
      path: "./fonts/antonio/antonio-v19-latin-700.woff2",
      weight: "700",
    },
  ],
  variable: "--font-antonio",
});

const inter = localFont({
  src: [
    {
      path: "./fonts/inter/inter-v18-latin-100.woff2",
      weight: "100",
    },
    {
      path: "./fonts/inter/inter-v18-latin-200.woff2",
      weight: "200",
    },
    {
      path: "./fonts/inter/inter-v18-latin-300.woff2",
      weight: "300",
    },
    {
      path: "./fonts/inter/inter-v18-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/inter/inter-v18-latin-500.woff2",
      weight: "500",
    },
    {
      path: "./fonts/inter/inter-v18-latin-600.woff2",
      weight: "600",
    },
    {
      path: "./fonts/inter/inter-v18-latin-700.woff2",
      weight: "700",
    },
    {
      path: "./fonts/inter/inter-v18-latin-800.woff2",
      weight: "800",
    },
    {
      path: "./fonts/inter/inter-v18-latin-900.woff2",
      weight: "900",
    },
    
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${antonio.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
