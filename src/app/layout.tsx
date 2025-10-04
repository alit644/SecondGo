import type { Metadata } from "next";
import { Poppins , Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
 variable: "--font-poppins",
 subsets: ["latin"],
 weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SecondGo",
  description:
    "Your go-to online marketplace to buy and sell trending products securely. Compare prices, read reviews, and shop with confidence.",
  keywords: [
    "marketplace",
    "buy online",
    "secure checkout",
    "trending products",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
