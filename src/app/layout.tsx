import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "💝 Valentine's Day",
  description: "A special message for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
