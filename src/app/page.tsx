export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-zinc-100 mb-4">Thomas Startz</h1>
        <p className="text-zinc-300 text-lg leading-relaxed">
          Co-founder of{" "}
          <a
            href="https://daisyai.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-100 underline underline-offset-4 hover:text-white transition-colors"
          >
            DaisyAI
          </a>
          . Building AI tools for healthcare.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-zinc-400 leading-relaxed">
          I work on product and engineering at DaisyAI, where we&apos;re using
          AI to automate clinical workflows. Previously worked on [your previous
          work]. Based in [location].
        </p>
      </section>

      <section className="pt-4">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-4">
          Connect
        </h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:you@example.com"
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              Email
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
