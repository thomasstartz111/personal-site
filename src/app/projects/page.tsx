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
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Projects</h1>
      <p className="text-zinc-400 mb-8">Things I&apos;ve built and worked on.</p>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article>
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {project.name}
                  </h2>
                  {project.status && (
                    <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-sm mt-1">
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
