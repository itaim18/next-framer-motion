import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";

const options = {
  mdxOptions: {
    rehypePlugins: [rehypeSlug],
  },
};

export async function loadPost(slug) {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);
  const mdxSource = await serialize(content, options);
  return { frontmatter, content, source: mdxSource };
}

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}
function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}

export async function getBlogPostList() {
  const fileNames = await readDirectory("/content");

  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}
