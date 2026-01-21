import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../../mdx-components";
import remarkGfm from "remark-gfm";

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
      <div className="p-6 prose max-w-none prose-headings:font-semibold">
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
    </article>
  );
}
