import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import React from "react";
import MDXImage from "@/src/components/MDXImage/MDXImage";
import PixelatedApple from "@/src/components/PixelatedApple/PixelatedApple";
import BlogHero from "@/src/components/BlogHero/BlogHero";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "@/src/components/CodeSnippet/CodeSnippet";
import Strong from "@/src/components/Strong/Strong";
import BlockQuote from "@/src/components/BlockQuote/BlockQuote";
import matter from "gray-matter";
import SpecialLink from "@/src/components/SpecialLink/SpecialLink";
import TableOfContents from "@/src/components/TableOfContents/TableOfContents";
import Image from "next/image";

export async function generateMetadata({ params }: any) {
  const myPath = path.join(process.cwd(), `/content/${params.postSlug}.mdx`);
  const res = await fs.readFile(myPath, "utf8");
  const { frontmatter } = await compileMDX<any>({
    source: res,
    options: { parseFrontmatter: true },
  });

  return {
    title: `${frontmatter.title} • Blog`,
    description: frontmatter.abstract,
    openGraph: {
      type: "website",
      locale: "en_US",
      title: "Itai Mizlish's Blog",
      description: frontmatter.abstract,
      siteName: "Itai Mizlish",
      images: [
        {
          url: frontmatter.image,
          width: 1920,
          height: 1080,
          alt: params.postSlug,
        },
      ],
    },
  };
}
export default async function Home({ params }: any) {
  const myPath = path.join(process.cwd(), `/content/${params.postSlug}.mdx`);
  const res = await fs.readFile(myPath, "utf8");
  const { content: myContent } = matter(res);
  const remarkHeading = (slug: any) => {
    return slug
      .toString()
      .toLowerCase() // Convert the string to lowercase
      .replace(/[^a-z0-9-]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, "");
  };
  const { frontmatter } = await compileMDX<any>({
    source: res,
    options: { parseFrontmatter: true },
  });
  return (
    <>
      <article className="my-36 relative max-w-2xl m-auto py-24">
        <BlogHero
          title={frontmatter.title}
          publishedOn={frontmatter.publishedOn}
        />
        <div className="relative max-w-2xl text-lg m-auto p-8">
          <MDXRemote
            source={myContent}
            components={{
              pre: CodeSnippet,
              h1: (props) => (
                <h1
                  {...props}
                  id={remarkHeading(props.children)}
                  data-toc
                  className="text-3xl my-8 scroll-smooth scroll-mt-36"
                />
              ),
              h2: (props) => (
                <h2
                  {...props}
                  id={remarkHeading(props.children)}
                  data-toc
                  className="text-2xl mt-8 scroll-smooth mb-4 scroll-mt-24"
                />
              ),
              h3: (props) => (
                <h3
                  {...props}
                  id={remarkHeading(props.children)}
                  data-toc
                  className="text-xl mt-6 mb-4 scroll-smooth scroll-mt-24"
                />
              ),
              blockquote: BlockQuote,
              strong: Strong,
              PixelatedApple,
              MDXImage,
              p: (props) => <p {...props} className="text-lg mt-6 mb-4 " />,
            }}
          />
        </div>
        <p className="border-t-2 text-lg leading-8 p-10 text-justify font-extrabold">
          Hey there! 👋 I&apos;m{" "}
          <Strong>
            <SpecialLink
              target="_blank"
              href="https://www.linkedin.com/in/itai-mizlish/"
            >
              Itai Mizlish
            </SpecialLink>
          </Strong>
          , a passionate frontend web developer with a knack for crafting
          captivating digital experiences using the magical world of JS
          frameworks and <Strong>magical</Strong> UI libraries. 🚀 When I&apos;m
          not immersed in lines of code, you&apos;ll find me exploring the
          diverse landscapes of Israel, contributing to open source projects,
          and getting lost in the time-traveling adventures of Doctor Who! 🌌🌟{" "}
          <br />
          You can read more about me{" "}
          <SpecialLink href="/about">here</SpecialLink>
        </p>
        <TableOfContents />
      </article>
    </>
  );
}
