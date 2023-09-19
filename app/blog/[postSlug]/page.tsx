import { loadBlogPost } from "../../../src/helpers/file-helper";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "@/src/components/CodeSnippet/CodeSnippet";
import BlockQuote from "@/src/components/BlockQuote/BlockQuote";
import Strong from "@/src/components/Strong/Strong";
async function BlogPost() {
  const { content } = await loadBlogPost();

  return (
    <main className="flex flex-col items-center min-h-screen justify-between p-8">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:lg:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>{" "}
      <div className="relative grid grid-cols-1  p-4 lg:p-16 xl:p-32 2xl:p-48 my-36">
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            blockquote: BlockQuote,
            strong: Strong,
          }}
        />
      </div>
    </main>
  );
}
export default BlogPost;
