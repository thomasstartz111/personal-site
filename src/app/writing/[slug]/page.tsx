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
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">{post.title}</h1>
        {post.date && (
          <time className="text-zinc-500 text-sm">{post.date}</time>
        )}
      </header>
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
