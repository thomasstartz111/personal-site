import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Thomas Startz",
  description: "Things I've built and worked on.",
};

const projects = [
  {
    name: "DaisyAI",
    description: "AI-powered clinical workflow automation for healthcare.",
    url: "https://daisyai.ai",
    status: "Active",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <header className="mb-12">
        <h1 className="text-2xl font-semibold text-zinc-900 mb-2">Projects</h1>
        <p className="text-zinc-500">Things I&apos;ve built and worked on.</p>
      </header>

      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.name} className="border border-zinc-200 p-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-lg font-medium text-zinc-900 group-hover:text-[#1565c0] transition-colors">
                    {project.name}
                  </h2>
                  {project.status && (
                    <span className="text-xs font-mono px-2 py-0.5 border border-zinc-300 text-zinc-500">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-zinc-500">
                  {project.description}
                </p>
              </article>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
