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
      <header className="mb-12">
        <h1 className="text-2xl font-semibold text-zinc-900 mb-2">Writing</h1>
        <p className="text-zinc-500">
          Essays and thoughts on technology, healthcare, and building.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-zinc-400 font-mono text-sm">No posts yet.</p>
      ) : (
        <div className="border border-zinc-200 p-6">
          <ul className="divide-y divide-zinc-200">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block py-5 first:pt-0 last:pb-0"
                >
                  <article>
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="text-lg font-medium text-zinc-900 group-hover:text-[#1565c0] transition-colors">
                        {post.title}
                      </h2>
                      <time className="text-zinc-400 text-sm font-mono shrink-0">
                        {post.date}
                      </time>
                    </div>
                    {post.description && (
                      <p className="text-zinc-500 text-sm mt-1">
                        {post.description}
                      </p>
                    )}
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
