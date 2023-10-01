import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../Redux/provider";
import "@/styles/container.style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "English Trainer 🇬🇧",
  description: "Developed by Samuel Shemtov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
