import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function loadPost() {
  const rawContent = await readFile(`/content/about.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}
