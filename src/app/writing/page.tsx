import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Writing | Thomas Startz",
  description: "Essays and thoughts on technology, healthcare, and building.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Writing</h1>
        <p className="text-zinc-500 text-sm">
          Essays and thoughts on technology, healthcare, and building.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-zinc-400 font-mono text-sm">No posts yet.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border border-zinc-200 p-6">
              {post.href ? (
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded"
                >
                  <article>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-lg font-medium text-zinc-900 group-hover:text-[#1565c0] transition-colors">
                        {post.title}
                      </h2>
                      <span className="text-zinc-400 text-sm">↗</span>
                      <span className="text-xs font-mono text-zinc-400">
                        {post.date}
                      </span>
                    </div>
                    {post.description && (
                      <p className="text-zinc-500">
                        {post.description}
                      </p>
                    )}
                  </article>
                </a>
              ) : (
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded"
                >
                  <article>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-lg font-medium text-zinc-900 group-hover:text-[#1565c0] transition-colors">
                        {post.title}
                      </h2>
                      <span className="text-xs font-mono text-zinc-400">
                        {post.date}
                      </span>
                    </div>
                    {post.description && (
                      <p className="text-zinc-500">
                        {post.description}
                      </p>
                    )}
                  </article>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
