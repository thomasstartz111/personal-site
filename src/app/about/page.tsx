import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thomas Startz — Founder of Daisy AI. Previously AllianceBernstein, Redesign Health, UnitedHealthcare.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            Now
          </h2>
          <p className="text-zinc-900">
            <a
              href="https://daisyai.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#1565c0] transition-colors"
            >
              Daisy AI
            </a>
          </p>
          <p className="text-zinc-500 text-sm">New York</p>
        </div>

        <div>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            Previously
          </h2>
          <ul className="space-y-1 text-zinc-700 text-sm">
            <li>AllianceBernstein</li>
            <li>Redesign Health</li>
            <li>UnitedHealthcare</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            Education
          </h2>
          <ul className="space-y-1 text-zinc-700 text-sm">
            <li>Columbia University</li>
            <li>The Wharton School</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
