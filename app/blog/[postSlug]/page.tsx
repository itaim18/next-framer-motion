import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";
export default async function Home({ params }: any) {
  // Optionally provide a type for your frontmatter object
  const myPath = path.join(process.cwd(), `/content/${params.postSlug}.mdx`);
  console.log(myPath);
  const res = await fs.readFile(myPath, "utf8");
  console.log(res);

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: `---
      title: RSC Frontmatter Example
      ---
      # Hello World
      This is from Server Components!
    `,
    options: { parseFrontmatter: true },
  });
  return (
    <>
      <h1>{frontmatter.title}</h1>
      {content}
    </>
  );
}
