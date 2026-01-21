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
  description:
    "Founder building AI systems for healthcare operations and clinical decision support. Writing about healthcare automation, applied AI, and markets.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Thomas Startz",
    description:
      "Founder building AI systems for healthcare operations and clinical decision support.",
    url: "https://tstartz.com",
    siteName: "Thomas Startz",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Thomas Startz — Founder, Healthcare AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Startz",
    description:
      "Founder building AI systems for healthcare operations and clinical decision support.",
    images: ["/og.png"],
  },
};

const navLinks = [
  { href: "https://substack.com/@tstartz", label: "Writing", external: true },
  { href: "/projects", label: "Projects", external: false },
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
            <nav className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
              <Link href="/" className="group">
                <span className="text-zinc-900 font-semibold text-lg tracking-tight group-hover:text-zinc-600 transition-colors block">
                  Thomas Startz
                </span>
                <span className="text-zinc-400 text-xs font-mono">
                  Founder, Daisy AI
                </span>
              </Link>
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 text-sm hover:text-zinc-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-zinc-500 text-sm hover:text-zinc-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="flex-1 max-w-2xl mx-auto px-6 py-16 w-full">
            {children}
          </main>
          <footer className="border-t border-zinc-300">
            <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
              <span className="text-zinc-400 text-sm font-mono">
                &copy; {new Date().getFullYear()}
              </span>
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
                <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
                <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
