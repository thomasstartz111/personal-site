import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../../mdx-components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Thomas Startz`,
    description: post.description || "",
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <article className="border border-zinc-200">
      <header className="p-6 pb-0 mb-8">
        <h1 className="text-3xl font-semibold text-zinc-900 mb-3 leading-tight">
          {post.title}
        </h1>
        {post.date && (
          <time className="text-zinc-400 text-sm font-mono">{post.date}</time>
        )}
      </header>
      <hr className="border-zinc-200" />
      <div className="p-6 prose prose-zinc max-w-none text-zinc-700 prose-headings:text-zinc-900 prose-headings:font-semibold prose-p:text-zinc-700 prose-li:text-zinc-700 prose-strong:text-zinc-800 prose-a:text-zinc-900 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-[#1565c0]">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
