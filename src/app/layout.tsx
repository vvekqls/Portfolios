import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | David Song",
    default: "David Song",
  },
  description: "Portfolio with custom AI chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="py-10 max-w-3xl mx-auto px-3">{children}</main>
      </body>
    </html>
  );
}
