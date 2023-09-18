import React from "react";

import BlogSummaryCard from "@/src/components/BlogSummaryCard/BlogSummaryCard";

import { getBlogPostList } from "@/src/helpers/file-helper";

export async function generateMetadata() {
  return {
    title: "Blog",
    description: "A wonderful blog about JavaScript",
  };
}
async function Home() {
  const blogPosts: any = await getBlogPostList();

  return (
    <div className="flex flex-col items-center w-full p-16 max-w-screen-md mt-56 mb-24 mx-auto">
      <h1 className="mt-1 mb-11">Latest Content:</h1>
      {blogPosts.map(({ slug, ...delegated }: any) => (
        <BlogSummaryCard key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Home;
