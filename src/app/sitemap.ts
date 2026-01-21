import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
  const baseUrl = "https://tstartz.com";

  const posts = getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/colophon`,
      lastModified: new Date(),
      priority: 0.5,
    },
    ...postUrls,
  ];
}
