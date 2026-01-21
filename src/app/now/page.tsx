import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now | Thomas Startz",
  description: "What I'm focused on right now.",
};

export default function NowPage() {
  return (
    <div>
      <header className="mb-12">
        <h1 className="text-2xl font-semibold text-zinc-900 mb-2">Now</h1>
        <p className="text-zinc-400 text-sm font-mono">
          Updated January 2026 &middot;{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-600 transition-colors"
          >
            What is this?
          </a>
        </p>
      </header>

      <div className="space-y-10">
        <section>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
            Building
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            Focused on DaisyAI — using AI to automate clinical workflows in
            healthcare. We&apos;re working on prior authorization automation and
            clinical documentation.
          </p>
        </section>

        <hr className="border-zinc-200" />

        <section>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
            Learning
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            [What you&apos;re currently learning or exploring]
          </p>
        </section>

        <hr className="border-zinc-200" />

        <section>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
            Reading
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            [Current books or content you&apos;re consuming]
          </p>
        </section>
      </div>
    </div>
  );
}
