import * as React from "react";
import Logo from "@/components/shared/Logo";
import Link from "next/link";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <Logo />
            <p className="my-6 text-muted-foreground">
              Fast, simple marketplace. Discover trending products, compare
              prices, and checkout securely.
            </p>
           
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="my-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/"
                className="block transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="block transition-colors hover:text-primary"
              >
                Explore
              </Link>
              <Link
                href="/categories"
                className="block transition-colors hover:text-primary"
              >
                Categories
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>İstanbul, Türkiye</p>
              <p>Phone: +90 536 566 3818</p>
              <p>Email: secondgo@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {year} SecondGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
