import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AssistantWidget from "@/components/common/AssistantWidget";

const khTeka = localFont({
  src: [
    {
      path: "../../public/fonts/KHTekaTRIAL-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/KHTekaTRIAL-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-teka",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../../public/fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const chivoMono = localFont({
  src: [
    {
      path: "../../public/fonts/ChivoMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ChivoMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-chivo",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://counelabworks.com"),
  title: {
    default: "Coune LabWorks",
    template: "%s | Coune LabWorks",
  },
  description: "Those with wings shall keep flying",
  keywords: [
    "Coune LabWorks",
    "CLW",
    "creative tech lab",
    "art & technology",
    "interactive brand experience",
    "art installation",
    "concept prototyping",
    "software & hardware development",
    "Bandung",
    "Indonesia",
  ],
  authors: [{ name: "Coune LabWorks" }],
  creator: "Coune LabWorks",
  icons: {
    icon: [
      { url: "/images/YUdSzw0WinlcbTGORe8jVV625U0.png", media: "(prefers-color-scheme: light)" },
      { url: "/images/gcVJ8vgsIGEke5rZ5LkRV67qw0.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/images/YUdSzw0WinlcbTGORe8jVV625U0.png",
    apple: "/images/YUdSzw0WinlcbTGORe8jVV625U0.png",
  },
  openGraph: {
    title: "Coune LabWorks",
    description: "Those with wings shall keep flying",
    url: "https://counelabworks.com",
    siteName: "Coune LabWorks",
    images: [
      {
        url: "/images/EYKaoybaeWZUMN95xou7D5YAdT4.png",
        width: 1200,
        height: 630,
        alt: "Coune LabWorks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coune LabWorks",
    description: "Those with wings shall keep flying",
    images: ["/images/EYKaoybaeWZUMN95xou7D5YAdT4.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${khTeka.variable} ${instrumentSerif.variable} ${chivoMono.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <AssistantWidget />
      </body>
    </html>
  );
}
