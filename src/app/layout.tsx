import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thomas Startz",
  description: "Technical founder and researcher",
  openGraph: {
    title: "Thomas Startz",
    description: "Technical founder and researcher",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thomas Startz",
    description: "Technical founder and researcher",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/now", label: "Now" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-zinc-800">
            <nav className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link
                href="/"
                className="text-zinc-100 font-medium hover:text-white transition-colors"
              >
                TS
              </Link>
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 text-sm hover:text-zinc-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
            {children}
          </main>
          <footer className="border-t border-zinc-800">
            <div className="max-w-2xl mx-auto px-6 py-6 text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} Thomas Startz
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
