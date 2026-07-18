import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import BackToTop from "./components/BackToTop";
import CookiePreferences from "./components/CookiePreferences";
import FloatingContact from "./components/FloatingContact";

export const metadata: Metadata = {
  title: "Bigwig technology — Your end-to-end AI Partner",
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
      className="min-h-[100dvh] antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-[100dvh] flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />

          <main className="min-h-0 flex-1 pt-24">{children}</main>

          <Footer />
          <BackToTop />
          <CookiePreferences />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
