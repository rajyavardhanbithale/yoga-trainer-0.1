
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const pops = Raleway(
  {
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  }
);

export const metadata: Metadata = {
  title: "RAGE YOGA TRAINER",
  description: "RAGE YOGA TRAINER",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${pops.className}`}>{children}</body>
    </html>
  );
}
