import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/src/components/BlogHero/BlogHero";
import { notFound } from "next/navigation";
import { loadPost } from "@/src/helpers/file-helper";
import CodeSnippet from "@/src/components/CodeSnippet/CodeSnippet";
import BlockQuote from "@/src/components/BlockQuote/BlockQuote";
import Strong from "@/src/components/Strong/Strong";
import PixelatedApple from "@/src/components/PixelatedApple/PixelatedApple";
import Link from "next/link";

export async function generateMetadata({ params }: any) {
  const blogPostData = await loadPost(params.postSlug);

  if (!blogPostData) {
    return null;
  }

  const { frontmatter } = blogPostData;
  return {
    title: `${frontmatter.title} • blog`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }: any) {
  const blogPostData = await loadPost(params.postSlug);
  const { frontmatter, content, source } = blogPostData;

  if (!blogPostData) {
    notFound();
  }

  return (
    <>
      <article className="my-36 relative max-w-2xl m-auto py-24">
        <BlogHero
          title={frontmatter.title}
          publishedOn={frontmatter.publishedOn}
        />
        <div className="relative max-w-2xl text-lg m-auto p-8">
          <MDXRemote
            source={content}
            components={{
              pre: CodeSnippet,
              blockquote: BlockQuote,
              strong: Strong,
              PixelatedApple,
            }}
          />
        </div>

        <p className="border-t-2 text-lg">
          Hey there! 👋 I&apos;m Itai Mizlish, a passionate frontend web
          developer with a knack for crafting captivating digital experiences
          using the magical world of React JS frameworks. 🚀 When I&apos;m not
          immersed in lines of code, you&apos;ll find me exploring the diverse
          landscapes of Israel, contributing to open source projects, and
          getting lost in the time-traveling adventures of Doctor Who! 🌌🌟{" "}
          <br />
          You can read more about me{" "}
          <Link
            href="/about"
            className="text-indigo-600 hover:text-indigo-300 hover:underline transition-all ease-in-out duration-200"
          >
            here
          </Link>
        </p>
      </article>
    </>
  );
}

export default BlogPost;
