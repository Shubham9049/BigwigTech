import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CODT — Your end-to-end AI Partner",
  description: "Digital products, AI platforms, and thoughtful software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
