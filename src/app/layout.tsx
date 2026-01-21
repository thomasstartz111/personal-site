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
  metadataBase: new URL("https://tstartz.com"),
  title: {
    default: "Thomas Startz",
    template: "%s | Thomas Startz",
  },
  description:
    "Founder of Daisy AI. Building healthcare automation. Previously AllianceBernstein, Redesign Health, UnitedHealthcare. Columbia, Wharton.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Thomas Startz",
    description:
      "Founder of Daisy AI. Building healthcare automation for utilization management, interoperability, and workflow graphs.",
    url: "https://tstartz.com",
    siteName: "Thomas Startz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Thomas Startz — Founder, Daisy AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TBStartz",
    creator: "@TBStartz",
    title: "Thomas Startz",
    description:
      "Founder of Daisy AI. Building healthcare automation.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
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
          <header className="border-b border-zinc-300">
            <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
              <Link href="/" className="group">
                <span className="text-zinc-900 font-semibold text-lg tracking-tight group-hover:text-zinc-600 transition-colors block">
                  Thomas Startz
                </span>
                <span className="text-zinc-400 text-xs font-mono">
                  Founder, Daisy AI
                </span>
              </Link>
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 text-sm hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
            {children}
          </main>
          <footer className="border-t border-zinc-300">
            <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
              <span className="text-zinc-400 text-sm font-mono">
                &copy; {new Date().getFullYear()}
              </span>
              <Link
                href="/colophon"
                className="text-zinc-400 text-xs hover:text-zinc-600 transition-colors"
              >
                Colophon
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
