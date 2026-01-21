import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 relative">
          <Image
            src="/headshot.jpg"
            alt="Thomas Startz"
            fill
            priority
            className="object-cover object-[center_15%]"
          />
        </div>
        <p className="text-xl text-zinc-900 leading-relaxed font-medium flex-1">
          Founder building AI systems for healthcare operations and clinical decision support.
        </p>
      </section>

      <hr className="border-zinc-200" />

      <section className="space-y-4">
        <p className="text-zinc-600 leading-relaxed">
          Currently building{" "}
          <a
            href="https://daisyai.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 underline underline-offset-4 hover:text-[#1565c0] transition-colors"
          >
            Daisy AI
          </a>
          , focused on automating utilization management, clinical review, and documentation workflows.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I write about healthcare automation, applied AI systems, and markets.
        </p>
        <p className="text-zinc-500 leading-relaxed">
          New York.
        </p>
      </section>

      <hr className="border-zinc-200" />

      <section>
        <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
          Connect
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a
              href="https://x.com/TBStartz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thomas-startz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thomasstartz111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://substack.com/@tstartz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Substack
            </a>
          </li>
          <li>
            <span className="text-zinc-600">hello@tstartz.com</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
