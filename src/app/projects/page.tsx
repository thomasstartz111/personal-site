import { Metadata } from "next";
import { projects } from "@/../content/projects";

export const metadata: Metadata = {
  title: "Projects | Thomas Startz",
  description: "Things I've built and worked on.",
};

export default function ProjectsPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Projects</h1>
        <p className="text-zinc-500 text-sm">Things I&apos;ve built and worked on.</p>
      </header>

      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.title} className="border border-zinc-200 p-6">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded"
            >
              <article>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-lg font-medium text-zinc-900 group-hover:text-[#1565c0] transition-colors">
                    {project.title}
                  </h2>
                  {project.status && (
                    <span className="text-xs font-mono px-2 py-0.5 border border-zinc-300 text-zinc-500">
                      {project.status}
                    </span>
                  )}
                  {project.date && (
                    <span className="text-xs font-mono text-zinc-400">
                      {project.date}
                    </span>
                  )}
                </div>
                <p className="text-zinc-500">
                  {project.description}
                </p>
              </article>
            </a>
            {project.video && (
              <details className="mt-4 group" id={`${project.title.toLowerCase().replace(/\s+/g, "-")}-demo`}>
                <summary className="cursor-pointer text-sm font-mono text-zinc-500 hover:text-zinc-700 transition-colors list-none flex items-center gap-2">
                  <span className="text-zinc-400 group-open:rotate-90 transition-transform">▶</span>
                  Watch demo
                </summary>
                <div className="mt-3">
                  <video
                    src={project.video}
                    controls
                    className="w-full rounded border border-zinc-200"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </details>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
