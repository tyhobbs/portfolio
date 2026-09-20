import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: [
    { path: "./fonts/archivo-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/archivo-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/archivo-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/archivo-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/archivo-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

const mono = localFont({
  src: [
    { path: "./fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const title = "Tyler Hobbs — Machine Learning Engineer";
const description =
  "LLM fine-tuning, model evaluation and medical imaging. M.S. Data Science, University of Virginia, December 2026.";

export const metadata: Metadata = {
  // Change this one line if the site moves to a custom domain.
  metadataBase: new URL("https://tyhobbs.vercel.app"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Tyler Hobbs",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
