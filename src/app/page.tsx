import Link from "next/link";
import Image from "next/image";
import { projects } from "@/../content/projects";
import { getAllPosts } from "@/lib/posts";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <rect x="1" y="1" width="8" height="8" rx="1" />
    </svg>
  ),
  GitHub: (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <circle cx="5" cy="5" r="4" />
    </svg>
  ),
  Substack: (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <rect x="1" y="2" width="8" height="1.5" />
      <rect x="1" y="5" width="8" height="1.5" />
    </svg>
  ),
  X: (
    <svg width="10" height="10" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="1.5" fill="none">
      <line x1="2" y1="2" x2="8" y2="8" />
      <line x1="8" y1="2" x2="2" y2="8" />
    </svg>
  ),
};

const socialLinks = [
  { href: "https://www.linkedin.com/in/thomas-startz/", label: "LinkedIn" },
  { href: "https://github.com/thomasstartz111", label: "GitHub" },
  { href: "https://substack.com/@tstartz", label: "Substack" },
  { href: "https://x.com/TBStartz", label: "X" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-24">
      {/* Left sidebar - Photo + Social */}
      <aside className="md:w-52 flex-shrink-0">
        <div className="md:sticky md:top-8 space-y-6">
          <div className="w-48 md:w-full aspect-[3/4] relative overflow-hidden rounded-lg mx-auto md:mx-0">
            <Image
              src="/headshot.jpg"
              alt="Thomas Startz"
              fill
              className="object-cover object-[center_15%]"
              priority
            />
          </div>
          <ul className="space-y-2 text-sm text-center md:text-left">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-2"
                >
                  <span className="opacity-40">{socialIcons[link.label]}</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:hello@tstartz.com"
                className="text-[#c62828] hover:text-[#a31f1f] transition-colors inline-flex items-center gap-2"
              >
                <span className="opacity-40">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M1 3l4 3 4-3M1 3v5h8V3" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </span>
                hello@tstartz.com
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 space-y-12">
        {/* Bio */}
        <section className="space-y-4">
          <p className="text-lg text-zinc-700 leading-relaxed">
            <span className="block text-2xl sm:text-3xl leading-tight text-zinc-900 mb-4">
              Hi, I&apos;m Thomas.
            </span>
            I live in Brooklyn and work on healthcare software at Qualified Health.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Outside work, I tend a small but mighty garden, accumulate tools faster than I can
            reasonably justify, and start side projects with varying degrees of completion. Some
            are software; increasingly, they involve making things with my hands and doing things
            that don&apos;t have measurable outcomes. This website is one of them.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            You can browse my{" "}
            <Link href="/projects" className="text-zinc-900 underline underline-offset-4 hover:text-[#1565c0] transition-colors">
              projects
            </Link>
            , read my{" "}
            <Link href="/writing" className="text-zinc-900 underline underline-offset-4 hover:text-[#1565c0] transition-colors">
              writing
            </Link>
            , or see what else I&apos;m{" "}
            <Link href="/now" className="text-zinc-900 underline underline-offset-4 hover:text-[#1565c0] transition-colors">
              up to
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm sm:text-base font-medium text-zinc-700">
            A few other things
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            On the subway, I&apos;m usually losing to Stockfish level 4 or working through an
            irresponsibly long Kindle queue. Book recommendations are always welcome.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            I get around the city on my red vintage Fuji, run a marathon most years, and remain
            embarrassingly bad at swimming despite spending my teenage summers lifeguarding.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            I still follow markets and the news more closely than is probably healthy—a habit left
            over from my bbg terminal days. I trade options on Robinhood and occasionally convince
            myself I&apos;ve found alpha in prediction markets on Kalshi.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            I&apos;m dubious about the financialization of land and believe cities should be shaped
            more by the people who live in them than by Excel models.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            You can reach me at{" "}
            <a
              href="mailto:hello@tstartz.com"
              className="text-zinc-900 underline underline-offset-4 hover:text-[#1565c0] transition-colors"
            >
              hello@tstartz.com
            </a>
            .
          </p>
        </section>

        <hr className="border-zinc-200" />

        {/* Projects */}
        <section id="projects">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
            Featured work
          </h2>
          <div className="border border-zinc-200 p-6">
            <ul className="space-y-6">
              {projects.slice(0, 2).map((project) => (
                <li key={project.title}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-zinc-900 font-medium group-hover:text-[#1565c0] transition-colors">
                        {project.title}
                      </span>
                      {project.status && (
                        <span className="text-xs font-mono text-zinc-400">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-500 text-sm">{project.description}</p>
                  </a>
                  {project.video && (
                    <Link
                      href={`/projects#${project.title.toLowerCase().replace(/\s+/g, "-")}-demo`}
                      className="text-xs text-zinc-400 hover:text-[#1565c0] transition-colors mt-1 inline-block"
                    >
                      Watch demo &rarr;
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="mt-8 mb-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            Selected projects
          </h2>
          <div className="border border-zinc-200 p-6">
            <ul className="space-y-6">
              {projects.slice(2).map((project) => (
                <li key={project.title}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-zinc-900 font-medium group-hover:text-[#1565c0] transition-colors">
                        {project.title}
                      </span>
                      {project.status && (
                        <span className="text-xs font-mono text-zinc-400">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-500 text-sm">{project.description}</p>
                  </a>
                  {project.video && (
                    <Link
                      href={`/projects#${project.title.toLowerCase().replace(/\s+/g, "-")}-demo`}
                      className="text-xs text-zinc-400 hover:text-[#1565c0] transition-colors mt-1 inline-block"
                    >
                      Watch demo &rarr;
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/projects"
            className="inline-block mt-4 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            All projects &rarr;
          </Link>
        </section>

        <hr className="border-zinc-200" />

        {/* Recent Writing */}
        <section id="writing">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Recent Writing
            </h2>
            <a
              href="https://substack.com/@tstartz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              Substack &rarr;
            </a>
          </div>
          {posts.length === 0 ? (
            <p className="text-zinc-400">No posts yet.</p>
          ) : (
            <div className="border border-zinc-200 p-6">
              <ul className="space-y-6">
                {posts.map((post) => (
                  <li key={post.slug}>
                    {post.href ? (
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-zinc-900 font-medium group-hover:text-[#1565c0] transition-colors">
                            {post.title}
                          </span>
                          <span className="text-zinc-400 text-xs">↗</span>
                          <time className="text-xs font-mono text-zinc-400 shrink-0 whitespace-nowrap">
                            {post.date}
                          </time>
                        </div>
                        {post.description && (
                          <p className="text-zinc-500 text-sm">{post.description}</p>
                        )}
                      </a>
                    ) : (
                      <Link
                        href={`/writing/${post.slug}`}
                        className="group block"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-zinc-900 font-medium group-hover:text-[#1565c0] transition-colors">
                            {post.title}
                          </span>
                          <time className="text-xs font-mono text-zinc-400 shrink-0 whitespace-nowrap">
                            {post.date}
                          </time>
                        </div>
                        {post.description && (
                          <p className="text-zinc-500 text-sm">{post.description}</p>
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link
            href="/writing"
            className="inline-block mt-4 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            All writing &rarr;
          </Link>
        </section>
      </main>
    </div>
  );
}
