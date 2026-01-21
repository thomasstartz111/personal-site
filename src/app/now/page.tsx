import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now | Thomas Startz",
  description: "What I'm focused on right now.",
};

export default function NowPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Now</h1>
      <p className="text-zinc-500 text-sm mb-8">
        Updated January 2026 &middot;{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-400 transition-colors"
        >
          What is this?
        </a>
      </p>

      <div className="space-y-6 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-lg font-medium text-zinc-100 mb-2">Building</h2>
          <p>
            Focused on DaisyAI — using AI to automate clinical workflows in
            healthcare. We&apos;re working on prior authorization automation and
            clinical documentation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-zinc-100 mb-2">Learning</h2>
          <p>[What you&apos;re currently learning or exploring]</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-zinc-100 mb-2">Reading</h2>
          <p>[Current books or content you&apos;re consuming]</p>
        </section>
      </div>
    </div>
  );
}
