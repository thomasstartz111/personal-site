import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 text-zinc-100">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-zinc-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mt-6 mb-3 text-zinc-200">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-zinc-100 underline underline-offset-4 hover:text-white transition-colors"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-zinc-300 mb-4 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-zinc-300 mb-4 space-y-1">
        {children}
      </ol>
    ),
    code: ({ children }) => (
      <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-sm text-zinc-200">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-zinc-600 pl-4 italic text-zinc-400 my-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
