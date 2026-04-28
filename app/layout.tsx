import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jobjag — Guiding Careers · Building Futures",
  description:
    "From career guidance and professional branding to HR consulting and job placement, Jobjag delivers end-to-end human capital solutions in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
