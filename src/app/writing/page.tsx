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
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Writing</h1>
      <p className="text-zinc-400 mb-8">
        Essays and thoughts on technology, healthcare, and building.
      </p>

      {posts.length === 0 ? (
        <p className="text-zinc-500">No posts yet.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group block"
              >
                <article>
                  <h2 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-zinc-400 text-sm mt-1">
                      {post.description}
                    </p>
                  )}
                  <time className="text-zinc-500 text-sm mt-1 block">
                    {post.date}
                  </time>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
