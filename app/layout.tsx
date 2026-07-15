import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import BackToTop from "./components/BackToTop";

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />

          <main className="flex-1 pt-24">{children}</main>

          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
