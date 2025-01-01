import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/lib/mdx";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl prose dark:prose-invert">
      <h1>{post.title}</h1>
      <div className="flex gap-2 mb-8">
        <time>{post.date}</time>
        {post.tags.map((tag: string) => (
          <span key={tag} className="text-sm text-gray-500">
            #{tag}
          </span>
        ))}
      </div>
      <MDXRemote source={post.content} />
    </div>
  );
}
