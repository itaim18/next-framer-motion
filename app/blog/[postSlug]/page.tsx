import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/src/helpers/file-helper";
import COMPONENT_MAP from "@/src/helpers/mdx-components";
import BlogHero from "@/src/components/BlogHero/BlogHero";

export async function generateMetadata({ params }: any) {
  const { frontmatter } = await loadBlogPost(params.postSlug);

  return {
    title: `${frontmatter.title} • Blog`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }: any) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);

  return (
    <article>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
