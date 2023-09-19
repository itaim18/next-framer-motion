import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import React from "react";
export default async function Home({ params }: any) {
  const myPath = path.join(process.cwd(), `/content/${params.postSlug}.mdx`);
  const res = await fs.readFile(myPath, "utf8");

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: res,
    options: { parseFrontmatter: true },
  });
  return (
    <>
      <h1>{frontmatter.title}</h1>
      {content}
    </>
  );
}
