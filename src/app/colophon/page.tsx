import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colophon",
  description: "How this site was made — stack, typography, and design notes.",
};

export default function ColophonPage() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-2xl font-semibold text-zinc-900 mb-4">Colophon</h1>
        <p className="text-zinc-600 leading-relaxed">
          Notes on how this site was made.
        </p>
      </header>

      <hr className="border-zinc-200" />

      <section className="space-y-8">
        <div>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            Stack
          </h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#1565c0] transition-colors"
              >
                Next.js
              </a>{" "}
              — framework
            </li>
            <li>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#1565c0] transition-colors"
              >
                Tailwind CSS
              </a>{" "}
              — styling
            </li>
            <li>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#1565c0] transition-colors"
              >
                Vercel
              </a>{" "}
              — hosting
            </li>
            <li>MDX — writing</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            Typography
          </h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              <a
                href="https://vercel.com/font"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#1565c0] transition-colors"
              >
                Geist
              </a>{" "}
              — body text
            </li>
            <li>
              <a
                href="https://vercel.com/font"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#1565c0] transition-colors"
              >
                Geist Mono
              </a>{" "}
              — code and labels
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            Design
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              The aesthetic draws from Bauhaus and Swiss design — geometric forms,
              functional typography, restrained color. The dot-grid background and
              muted palette aim for something that feels both technical and warm.
            </p>
            <p>
              Colors: warm off-white background (#f8f7f4), zinc grays for text,
              and a single blue accent (#1565c0) for interactive elements.
            </p>
            <p>
              The goal is a site that loads fast, reads well, and gets out of the way.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-zinc-200" />

      <section>
        <p className="text-zinc-500 text-sm">
          View the source on{" "}
          <a
            href="https://github.com/thomasstartz111/tstartz-site"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-zinc-700 transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}
