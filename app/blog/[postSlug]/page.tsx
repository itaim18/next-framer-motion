import React from "react";

// import COMPONENT_MAP from "@/src/helpers/mdx-components";
import BlogHero from "@/src/components/BlogHero/BlogHero";
import { loadBlogPost } from "../../../src/helpers/file-helper";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "@/src/components/CodeSnippet/CodeSnippet";
import BlockQuote from "@/src/components/BlockQuote/BlockQuote";
// import "../styles.css";
import Strong from "@/src/components/Strong/Strong";
// export async function generateMetadata({ params }: any) {
//   const { frontmatter } = await loadBlogPost(params.postSlug);

//   return {
//     title: `${frontmatter.title} • Blog`,
//     description: frontmatter.abstract,
//   };
// }

async function BlogPostPage({ params }: any) {
  console.log(params);

  const { frontmatter, content } = await loadBlogPost(params.postSlug);

  return (
    <article>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            blockquote: BlockQuote,
            strong: Strong,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPostPage;
